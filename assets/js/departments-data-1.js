const data1 = {
    civil: {
        id: 'civil',
        name: 'Civil Engineering',
        icon: 'ph-buildings',
        hodName: 'Dr. Sureka Naagesh',
        hodTitle: 'Professor & Head - Civil Engineering',
        about: `
            <p class="mb-4">Established in 1946, the Department of Civil Engineering at BMSCE has progressively achieved academic excellence, quality research and consultancy over seven decades. The department imparts holistic technical education to meet professional and societal challenges with strong competency.</p>
            <p class="mb-4">The department receives Government of Karnataka grants and offers globally recognized BE, M.Tech and Ph.D programmes. UG was accredited under Tier-I (Washington Accord) in 2022 and continues under accreditation status. PG programmes are NBA accredited.</p>
            <p>With autonomy from VTU since 2008, the curriculum is continuously refined to build knowledge, skills and attitude. The department has evolved from a UG-focused unit to a research-driven ecosystem through VTU, AICTE QIP and AICTE ADF research recognitions.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Founded in 1946 as one of the original BMSCE branches.</li>
                <li>Offers UG, PG and research programmes in Civil Engineering.</li>
                <li>UG autonomy from VTU since 2008 for curriculum customization.</li>
                <li>PG specializations: Construction Technology, Environmental Engineering, Transportation Engineering & Management.</li>
                <li>Recognized VTU Research Centre (since 2002), AICTE QIP Research Centre (since 2012), AICTE ADF Research Centre (since 2018).</li>
                <li>46 Ph.D awarded and 58 scholars currently pursuing Ph.D / M.Sc (Engg.).</li>
                <li>Faculty strength: 35, with 28 Ph.D-qualified members.</li>
                <li>State-of-the-art labs supported by TEQIP and funding agencies.</li>
            </ul>
        `,
        vision: `<p>To be a center of excellence for imparting quality education in Civil Engineering with integrity and ethical standards for societal needs.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Accomplish excellence in Civil Engineering through dedicated teaching, learning and research.</li>
                <li>Produce technically competent civil engineers to serve society with pride.</li>
            </ul>
        `
    },
    mech: {
        id: 'mech',
        name: 'Mechanical Engineering',
        icon: 'ph-gear',
        hodName: 'Dr. H. M. Shivaprasad',
        hodTitle: 'Associate Professor and Head - Mechanical Engineering',
        about: `
            <p class="mb-4">Mechanical Engineering is one of the three founding UG programs started at BMSCE in 1946. Over the decades, the department has made significant progress in academics, research and consultancy.</p>
            <p class="mb-4">The department offers UG and M.Tech (Machine Design, started in 1985). Both programmes were granted academic autonomy by VTU in 2008, enabling outcome-focused, industry-relevant curriculum and skill-building pathways.</p>
            <p>The department has sustained a strong accreditation journey including Tier-I Washington Accord recognitions, along with excellent placements, higher studies outcomes and advanced R&D initiatives.</p>
        `,
        profile: `
            <h5 class="font-bold text-navy mb-3">Strengths of the Department</h5>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>UG accredited by NBA under Tier-I & Cycle-II (Washington Accord) in 2022 for 6 years.</li>
                <li>PG (Machine Design) NBA-accredited in 2018 for 5 years, extended in 2023 to 2024.</li>
                <li>Centre of Excellence in Advanced Materials Science (~₹6 crore, TEQIP-II, 2015).</li>
                <li>Product Innovation Lab established with Dassault Systemes (2016).</li>
                <li>BMSCE & Volvo Group Centre for Flexible Material Research established in 2024.</li>
                <li>Strong vibration and noise control R&D infrastructure.</li>
                <li>~₹2.20 crore R&D funding and ~₹0.36 crore consultancy over recent years.</li>
                <li>49 faculty members, 35 with Ph.D; around 40 research publications/year.</li>
                <li>47 Ph.D awarded (till 2021), with 34 ongoing Ph.D / M.Sc (Engg.) scholars.</li>
                <li>Consistent ~80% placement track record and strong global higher studies intake.</li>
            </ul>
        `,
        vision: `<p>To become a center of excellence in educating students to become successful Mechanical Engineers.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>M1: To empower students with fundamentals for a successful Mechanical Engineering career.</li>
                <li>M2: To prepare students for post-graduation, research and development.</li>
            </ul>
        `
    },
    ee: {
        id: 'ee',
        name: 'Electrical and Electronics Engineering',
        icon: 'ph-lightning',
        hodName: 'Dr. R. S. Geetha',
        hodTitle: 'Professor and Head - Electrical and Electronics',
        about: `
            <p class="mb-4">Established in 1946, the department evolved from Electrical Engineering to Electrical & Electronics Engineering and has a legacy of graduates recognized globally for diverse contributions.</p>
            <p class="mb-4">It nurtures a motivating learning environment beyond curriculum, with strong technical breadth so students adapt to societal and emerging technological requirements.</p>
            <p>Students secure campus and off-campus placements and pursue higher studies in India and abroad. Alumni and domain experts actively support student growth through collaborations and technical events.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Government grant-supported UG BE (EEE), sanctioned intake: 60.</li>
                <li>NBA Tier-I (Washington Accord) accreditation for UG programme.</li>
                <li>M.Tech in Power Electronics started in 1991, intake 18, NBA accredited.</li>
                <li>VTU Research Centre (since 2003), AICTE QIP Centre (since 2012), AICTE NDF Centre (since 2018).</li>
                <li>16 Ph.D awarded; 30 research scholars currently pursuing research.</li>
                <li>Research focus: power systems, drives, renewable energy, HVDC, power quality, nanotechnology, insulation diagnostics and phase change memory materials.</li>
                <li>UG accredited 2022-2025 under Tier-I; PG accredited 2023-2026.</li>
            </ul>
        `,
        vision: `<p>Facilitating the development of competent professionals capable of adapting to the constantly changing global scenario in the field of Electrical Sciences.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Impart quality technical education and encourage research in Electrical Sciences.</li>
                <li>Empower individuals to apply knowledge and skills to evolving technological needs of society.</li>
            </ul>
        `
    },
    ec: {
        id: 'ec',
        name: 'Electronics and Communication Engineering',
        icon: 'ph-cpu',
        hodName: 'Dr. K. P. Lakshmi',
        hodTitle: 'Professor and Head - Electronics and Communication Engineering',
        about: `
            <p class="mb-4">ECE has a long tradition of excellence in educating and mentoring future technology leaders. It offers UG, PG and research programmes with strong focus on OBE, industry collaboration and state-of-the-art labs.</p>
            <p class="mb-4">The curriculum builds strong analytical and technological foundations, backed by internships and project opportunities in industry and top universities.</p>
            <p>Students are trained beyond curriculum through projects, skill programs, competitions and research activities, ensuring holistic development and industry readiness.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Department established in 1971 with initial UG intake of 60; progressively expanded to 420 (2024).</li>
                <li>PG programmes: Electronics (1986), Digital Communication Engineering (1996), VLSI Design & Embedded Systems (2014).</li>
                <li>Recognized VTU Research Centre (since 2002), AICTE QIP Centre (since 2011).</li>
                <li>NBA Tier-I accreditation: 2017-2023 (cycle-I), 2023-2026 (cycle-II).</li>
            </ul>
        `,
        vision: `<p>To emerge as a center of academic excellence in electronics, communication and related domains through knowledge acquisition, dissemination and generation meeting global needs and standards.</p>`,
        mission: `<p>Impart quality education through state-of-the-art curriculum, conducive learning environment and research with continuous improvement leading to professional success.</p>`
    },
    iem: {
        id: 'iem',
        name: 'Industrial Engineering and Management',
        icon: 'ph-factory',
        hodName: 'Dr. Shailaja V.N.',
        hodTitle: 'Professor and Head - Industrial Engineering and Management',
        about: `
            <p class="mb-4">Established in 1979, IEM offers UG in Industrial Engineering and Management, emphasizing productivity, management and software engineering to bridge technical and managerial roles.</p>
            <p>The department has suitable labs and research support to produce professionals who contribute to organizational growth and profitability.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>UG intake: 60.</li>
                <li>VTU-recognized research centre for Ph.D and M.Sc (Engg).</li>
                <li>Lab facilities support Robotics, CIM, CAD/CAM, ERP, drafting and simulation.</li>
                <li>Department forum: Industrial Engineering Club (INDEC).</li>
                <li>12 faculty members, 7 doctorates; department is also a QIP centre for Ph.D.</li>
            </ul>
        `,
        vision: `<p>To emerge as an excellent center for quality higher education and highly proficient technical manpower for dynamic global needs with professional and ethical values.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Provide excellence in curricular, co-curricular and extra-curricular activities.</li>
                <li>Facilitate higher education through research activities.</li>
                <li>Cater to industry and societal needs.</li>
                <li>Nurture and mentor students for stakeholder acceptance.</li>
            </ul>
        `
    },
    cse: {
        id: 'cse',
        name: 'Computer Science and Engineering',
        icon: 'ph-desktop',
        hodName: 'Dr. Kavitha Sooda',
        hodTitle: 'Professor & Head - Computer Science and Engineering',
        about: `
            <p class="mb-4">CSE at BMSCE has been regionally and nationally renowned since 1983. The department nurtures professionals, researchers, innovators and entrepreneurs with technical depth, research attitude and social responsibility.</p>
            <p class="mb-4">The curriculum combines core fundamentals and advanced technologies to prepare students for industry and higher studies. Dedicated faculty contribute strongly to academic and research excellence.</p>
            <p>Students are placed in top MNCs and the department maintains strong industry interactions and MoUs, while also driving R&D collaborations and innovation culture.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Started in 1983 with UG intake 60; intake expanded to 180.</li>
                <li>M.Tech (CSE) established in 1993 with intake 18.</li>
                <li>Multiple NBA accreditation cycles including UG 2022-2025.</li>
                <li>VTU Research Centre since 2010 covering ML, cloud, big data, wireless networks, social network analysis and security.</li>
                <li>22 scholars awarded Ph.D; 59 scholars currently pursuing research.</li>
            </ul>
        `,
        vision: `<p>To be a model centre for education and training in the frontier areas of Computer Science and Engineering.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>M1: Educate and empower students with best teaching-learning practices for professional success.</li>
                <li>M2: Enhance skills for higher studies and research.</li>
                <li>M3: Foster innovation and entrepreneurship.</li>
            </ul>
        `
    },
    et: {
        id: 'et',
        name: 'Electronics and Telecommunication Engineering',
        icon: 'ph-broadcast',
        hodName: 'Dr. BALACHANDRA K',
        hodTitle: 'Professor and Head - Electronics and Telecommunication',
        about: `
            <p class="mb-4">Established in 1986, the department offers UG in Telecommunication Engineering with strong OBE implementation and sustained accreditation quality.</p>
            <p class="mb-4">The programme is multidisciplinary, blending Electronics, Communication and Computer Science concepts with robust lab and simulation tool exposure.</p>
            <p>Students demonstrate excellent project quality, publications, placements and higher studies outcomes in India and abroad.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>NBA Tier-I accreditation with extended validity through June 2025.</li>
                <li>Recognized VTU research centre and multiple doctoral outcomes.</li>
                <li>Strong tool ecosystem: Python, MATLAB, LabVIEW, Multisim, Xilinx, HFSS and more.</li>
                <li>Excellent placements in core and IT sectors; strong higher studies and entrepreneurship outcomes.</li>
            </ul>
        `,
        vision: `<p>Our graduates shall be globally competent Engineering professionals.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Curriculum designed for holistic development.</li>
                <li>Effective curriculum implementation with outcomes focus.</li>
                <li>Active association with industry, academia and alumni.</li>
                <li>Research leading to publications, patents and start-ups.</li>
                <li>Professional ethics, societal contribution and environmental concern.</li>
            </ul>
        `
    },
    is: {
        id: 'is',
        name: 'Information Science and Engineering',
        icon: 'ph-database',
        hodName: 'Dr. M K Nalini',
        hodTitle: 'Associate Professor & Head - Information Science and Engineering',
        about: `
            <p class="mb-4">ISE was established in 1987 and has continuously evolved with strong academic outcomes. Intake has progressively grown in response to demand and quality capacity.</p>
            <p class="mb-4">As an autonomous institution, the department designs curriculum using structured feedback from students, alumni, parents, industry experts and premier academicians.</p>
            <p>The department emphasizes student-centric pedagogy, modern skills, domain depth and global competency through research and practical learning.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>UG intake expanded from 60 to 267; PG M.Tech (Computer Network Engineering) started in 2011 (intake 18).</li>
                <li>31 experienced faculty members, 19 Ph.D holders.</li>
                <li>Research centre since 2011 with 15 guides across biometrics, cloud, NLP, IoT, data science and networks.</li>
                <li>Both UG and PG accredited by NBA Tier-I (Washington Accord) till 2025-26.</li>
                <li>Excellent placements (~95% average over recent years) with top global recruiters.</li>
            </ul>
        `,
        vision: `<p>Promote quality human resource capital by inculcating creativity and productivity in Information Technology.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Offer high-quality UG and PG programmes for higher studies and careers.</li>
                <li>Provide excellent teaching and research environment in Information Technology.</li>
            </ul>
        `
    },
    ei: {
        id: 'ei',
        name: 'Electronics and Instrumentation Engineering',
        icon: 'ph-thermometer',
        hodName: 'Dr. PREETHI K MANE',
        hodTitle: 'Associate Professor and Head - Electronics and Instrumentation',
        about: `
            <p class="mb-4">Started in 1991 (as Instrumentation Technology), the programme evolved into Electronics & Instrumentation Engineering for recent batches and offers UG intake of 60.</p>
            <p class="mb-4">The department emphasizes strong fundamentals, modern engineering tools and active industry collaborations in sensors, automation, embedded systems and IoT.</p>
            <p>Student projects have won national awards and publications; graduates achieve robust placement outcomes in core and allied domains.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Dedicated faculty, qualified technical staff and strong student ecosystem.</li>
                <li>Tools and labs: MATLAB, LabVIEW, Multisim, Xilinx, IAR, CCS, PLCs, PCB design and process control labs.</li>
                <li>Strong stakeholder engagement through alumni, industry and professional bodies.</li>
                <li>NBA-accredited under Tier-I Washington Accord.</li>
            </ul>
        `,
        vision: `<p>To bring forth globally emerging competent professionals with quality technical education meeting modern industrial demands through innovation and continuous improvement.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Achieve excellence in curricular, co-curricular and R&D activities.</li>
                <li>Impart quality education rooted in fundamentals.</li>
                <li>Prepare students for electronics and instrumentation industry needs.</li>
                <li>Inspire engineers to contribute to societal development.</li>
            </ul>
        `
    },
    me: {
        id: 'me',
        name: 'Medical Electronics Engineering',
        icon: 'ph-heartbeat',
        hodName: 'Dr. R. Jayagowri',
        hodTitle: 'Professor and Head - Medical Electronics Engineering',
        about: `
            <p class="mb-4">Medical Electronics at BMSCE started in 1992 and continues to bridge engineering, biology and medicine with future-focused healthcare innovation.</p>
            <p class="mb-4">The department offers UG and PG in Biomedical Signal Processing & Instrumentation, with strong teaching and active collaborative research profile.</p>
            <p>Through interdisciplinary collaborations and innovation ecosystem (CIME), students gain exposure to med-tech entrepreneurship and translational healthcare solutions.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>UG intake: 60; PG intake: 18.</li>
                <li>Strong doctoral faculty profile with high average experience.</li>
                <li>Collaborations with leading global universities, hospitals and research institutes.</li>
                <li>Research focus: biomedical signal/image processing, biomedical instrumentation, biosensors, biomedical VLSI.</li>
                <li>NBA accredited with active research scholars and recognized guides.</li>
            </ul>
        `,
        vision: `<p>To promote quality education in Medical Electronics Engineering for health and well-being of humankind through teaching and research platforms.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Impart knowledge and skills for professional development in Medical Electronics.</li>
                <li>Enable continuous upgradation of technical education.</li>
                <li>Promote creativity, commitment, leadership, ethics and values.</li>
            </ul>
        `
    },
    che: {
        id: 'che',
        name: 'Chemical Engineering',
        icon: 'ph-flask',
        hodName: 'Dr. Chetan A Nayak',
        hodTitle: 'Professor and Head - Chemical Engineering',
        about: `
            <p class="mb-4">The department started in 1995 and currently offers UG Chemical Engineering with strong faculty and sustained accreditation excellence.</p>
            <p class="mb-4">Its autonomous curriculum is balanced across sciences, engineering, core, electives, HSS and project work to build industry-ready capability.</p>
            <p>The department has deep research culture, advanced lab ecosystem and active consultancy/research collaborations.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>UG intake increased from 30 to 60.</li>
                <li>Approved research centre for Ph.D and M.Sc (Engg.) under VTU and AICTE.</li>
                <li>Tier-I NBA accreditation (cycle-II) granted till 30 June 2028.</li>
                <li>Advanced instrumentation includes GC, high-pressure reactor, TOC analyzer, FTIR, UV-Vis, fermenter, ultrafiltration, 3D printer and more.</li>
            </ul>
        `,
        vision: `<p>Be a globally recognized Chemical Engineering Department by imparting quality education.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Impart quality education and exposure to budding chemical engineers.</li>
                <li>Foster excellence in chemical science and engineering with research potential.</li>
                <li>Enable graduates to secure coveted positions in industry and society.</li>
            </ul>
        `
    },
    bt: {
        id: 'bt',
        name: 'Biotechnology',
        icon: 'ph-dna',
        hodName: 'Dr. Saisha Vinjamuri',
        hodTitle: 'Professor and Head - Biotechnology',
        about: `
            <p class="mb-4">Biotechnology offers BE programme supported by qualified faculty, strong infrastructure and funding support under DBT-STAR scheme for hands-on learning.</p>
            <p>The department drives impactful research through external grants from DST, DBT and VGST and promotes interdisciplinary scientific development.</p>
        `,
        profile: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Started in 2002 with intake 30; currently intake 60.</li>
                <li>UG accredited by NBA Tier-I (Washington Accord) with validity up to June 2028.</li>
                <li>10 faculty members with strong teaching and research profile.</li>
                <li>Research thrust: cancer, natural products, tissue culture, neuroscience, enzymes, wastewater treatment, nutraceuticals, computational biology and more.</li>
            </ul>
        `,
        vision: `<p>To be a Centre of excellence in Biotechnology creating graduates who endeavor for the welfare of mankind.</p>`,
        mission: `
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Impart quality education for lifelong professional growth and diverse careers.</li>
                <li>Create awareness on socio-ethical implications of biotechnology potential.</li>
            </ul>
        `
    }
};

window.departmentsData = window.departmentsData || {};
Object.assign(window.departmentsData, data1);
