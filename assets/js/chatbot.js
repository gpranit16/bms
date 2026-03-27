(() => {
    const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const apiBase = isLocalhost ? 'http://127.0.0.1:5601' : 'https://bms-s9o7.onrender.com';
    const chatApiUrl = `${apiBase}/api/chat`;

    const style = document.createElement('style');
    style.textContent = `
        .bms-chat-fab {
            position: fixed;
            right: 20px;
            bottom: 24px;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            border: 0;
            background: linear-gradient(145deg, #1a2b5e, #0f1f49);
            color: #c9a84c;
            font-size: 24px;
            box-shadow: 0 12px 24px rgba(15, 31, 73, 0.35);
            cursor: pointer;
            z-index: 1200;
        }

        .bms-chat-panel {
            position: fixed;
            right: 20px;
            bottom: 92px;
            width: min(380px, calc(100vw - 24px));
            height: 520px;
            max-height: calc(100vh - 130px);
            background: #ffffff;
            border: 1px solid rgba(26, 43, 94, 0.16);
            border-radius: 16px;
            box-shadow: 0 18px 40px rgba(15, 31, 73, 0.22);
            overflow: hidden;
            transform: translateY(16px);
            opacity: 0;
            pointer-events: none;
            transition: all 0.2s ease;
            z-index: 1200;
            display: flex;
            flex-direction: column;
            font-family: 'Poppins', sans-serif;
        }

        .bms-chat-panel.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }

        .bms-chat-head {
            background: #1a2b5e;
            color: #ffffff;
            padding: 12px 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .bms-chat-head h4 {
            font-size: 14px;
            margin: 0;
            display: flex;
            gap: 8px;
            align-items: center;
            font-weight: 700;
        }

        .bms-chat-close {
            border: 0;
            background: transparent;
            color: #ffffff;
            cursor: pointer;
            font-size: 18px;
        }

        .bms-chat-body {
            flex: 1;
            overflow-y: auto;
            background: #f8f7f4;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .bms-msg {
            max-width: 86%;
            border-radius: 12px;
            padding: 10px 12px;
            line-height: 1.45;
            font-size: 13px;
            white-space: pre-wrap;
        }

        .bms-msg.user {
            align-self: flex-end;
            background: #1a2b5e;
            color: #ffffff;
        }

        .bms-msg.bot {
            align-self: flex-start;
            background: #ffffff;
            color: #1f2937;
            border: 1px solid rgba(26, 43, 94, 0.12);
        }

        .bms-chat-foot {
            border-top: 1px solid rgba(15, 31, 73, 0.12);
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            background: #ffffff;
        }

        .bms-chat-input {
            border: 1px solid rgba(26, 43, 94, 0.25);
            border-radius: 10px;
            padding: 10px 11px;
            font-size: 13px;
            outline: none;
        }

        .bms-chat-input:focus {
            border-color: #1a2b5e;
            box-shadow: 0 0 0 3px rgba(26, 43, 94, 0.14);
        }

        .bms-chat-send {
            border: 0;
            border-radius: 10px;
            background: #c9a84c;
            color: #1a2b5e;
            font-weight: 700;
            padding: 0 16px;
            cursor: pointer;
        }

        .bms-chat-send:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);

    const fab = document.createElement('button');
    fab.className = 'bms-chat-fab';
    fab.title = 'BMSCE Assistant';
    fab.setAttribute('aria-label', 'Open BMSCE Assistant');
    fab.innerHTML = '💬';

    const panel = document.createElement('section');
    panel.className = 'bms-chat-panel';
    panel.innerHTML = `
        <div class="bms-chat-head">
            <h4>🎓 BMSCE Assistant</h4>
            <button class="bms-chat-close" aria-label="Close">✕</button>
        </div>
        <div class="bms-chat-body" id="bms-chat-body"></div>
        <form class="bms-chat-foot" id="bms-chat-form">
            <input class="bms-chat-input" id="bms-chat-input" placeholder="Ask about BMSCE..." maxlength="500" />
            <button class="bms-chat-send" id="bms-chat-send" type="submit">Send</button>
        </form>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    const body = panel.querySelector('#bms-chat-body');
    const form = panel.querySelector('#bms-chat-form');
    const input = panel.querySelector('#bms-chat-input');
    const sendBtn = panel.querySelector('#bms-chat-send');
    const closeBtn = panel.querySelector('.bms-chat-close');

    function appendMessage(text, role = 'bot') {
        const msg = document.createElement('div');
        msg.className = `bms-msg ${role}`;
        msg.textContent = text;
        body.appendChild(msg);
        body.scrollTop = body.scrollHeight;
    }

    function openPanel() {
        panel.classList.add('open');
        input.focus();
    }

    function closePanel() {
        panel.classList.remove('open');
    }

    fab.addEventListener('click', () => {
        if (panel.classList.contains('open')) {
            closePanel();
        } else {
            openPanel();
        }
    });

    closeBtn.addEventListener('click', closePanel);

    appendMessage('Hi! I am your BMSCE Assistant. Ask me about admissions, departments, placements, or campus information.');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = input.value.trim();
        if (!message) return;

        appendMessage(message, 'user');
        input.value = '';
        sendBtn.disabled = true;

        try {
            const res = await fetch(chatApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message, page: window.location.pathname })
            });

            const data = await res.json();
            if (!res.ok) {
                appendMessage(data?.error || 'Unable to reach assistant right now.');
            } else {
                appendMessage(data.reply || 'No response from assistant.');
            }
        } catch (_err) {
            appendMessage('Chat server is unreachable. Keep the backend running with: npm start (from the bmsce folder).');
        } finally {
            sendBtn.disabled = false;
            input.focus();
        }
    });
})();
