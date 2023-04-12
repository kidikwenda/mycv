const lang = getLang() || 'pt';
const newLine = $create('span');
newLine.classList.add('new-line')

document.addEventListener('DOMContentLoaded', function () {
    init()
})

var titles = {
    experiencias: {
        pt: 'Experiências',
        en: 'Experiences',
    },
    formacoes: {
        pt: 'Formação Académica',
        en: 'Academic Formation',
    },
    info_adicionais: {
        pt: 'Informações Adicionais',
        en: 'Additional Information',
    },
    email: 'E-mail',
    telefone: {
        pt: 'Telefone(s)',
        en: 'Telephone(s)',
    },
    idiomas: {
        pt: 'Idiomas',
        en: 'Languages',
    },
    tec_competencias: {
        pt: 'Competências Técnicas',
        en: 'Technical skills',
    },
    certifications: {
        pt: 'Formações/Certificações',
        en: 'Training/Certifications',
    },
    pers_competencias: {
        pt: 'Competências Pessoais',
        en: 'Personal skills',
    },
}

var perfil = {
    title: {
        pt: 'Perfil',
        en: 'Profile'
    },
    text: {
        pt: 'Desenvolvedor Full Stack de Softwares, com experiência de 8+ anos (WEB, Mobile e Desktop), Gestor Ágil de Projectos com SCRUM. Lider de equipas de desenvolvimento.2019 - actual',
        en: 'Full Stack Software Developer, with 8+ years of experience (WEB, Mobile and Desktop), Agile Project Manager with SCRUM. Development team leader.2019 - current'
    }
}

var experiencias = [
    {
        role: {
            pt: 'Analista e Desenvolvedor de Sistemas',
            en: 'Software Developer & Analist'
        },
        company: 'Tistech Angola, Luanda',
        date: {
            pt: '2019 - actual',
            en: '2019 - today'
        },
        desc: {
            pt: 'Analisar e implementar sistemas de acordo com as especiﬁcações do cliente. Líder de equipas de desenvolvimento em sistemas monolíticos e microsserviços.',
            en: 'Analyze and implement systems according to customer specifications. Leader of development teams in monolithic systems and microservices.'
        }
    },
    {
        role: {
            pt: 'Analista e Desenvolvedor Sénior de Sistemas',
            en: 'Senior Software Developer & Analist'
        },
        company: 'Quianni (AJEC), Luanda – Viana',
        date: {
            pt: '2017 - 2019',
            en: '2017 - 2019'
        },
        desc: {
            pt: 'Analisar e implementar sistemas de acordo com as especiﬁcações do cliente. Gestão dos processos de desenvolvimento com a metologia SCRUM.',
            en: 'Analyze and implement systems according to customer specifications. Management of development processes with the SCRUM methodology.'
        }
    },
    {
        role: {
            pt: 'Formador e Desenvolvedor de Sistemas na Instituição de Ensino',
            en: 'Trainer and Systems Developer at the Teaching Institution'
        },
        company: 'Darcan Service, Luanda',
        date: {
            pt: '2013 - 2016',
            en: '2013 - 2016'
        },
        desc: {
            pt: 'Analisar e implementar sistemas de acordo com as especiﬁcações do cliente. Formar e orientar estudantes em Programação Orientada à Objecto (POO), Programação Estruturada, Gestão de Projectos e Introdução à Informática.',
            en: 'Analyze and implement systems according to the customer specifications. Train and guide students in Object Oriented Programming (OOP), Programming Structured, Project Management and Introduction to Computing.'
        }
    }
]

var formacoes = [
    {
        role: {
            pt: 'Licenciatura em Ciências da Computação',
            en: 'Degree in Computer Science'
        },
        company: 'Faculdade de Ciências da Universidade Agostinho Neto – Angola',
        date: {
            pt: '2010 - 2017',
            en: '2010 - 2017'
        },
        desc: {
            pt: 'Programação, Administração de Redes, Análise e Desenho de Sistemas, Base de Dados, Engenharia de Software, Gestão de Projectos.',
            en: 'Programming, Network Administration, Systems Analysis and Design, Database, Software Engineering, Project Management.'
        }
    }
]

var info_adicionais = [
    {
        pt: 'Co-criador de software de Gestão (Quianni) certificado pela AGT.',
        en: 'Co-creator of Management software (Quianni) certified by General Tax Administration of Angola.'
    },
    {
        pt: 'Desenvolveu projectos PWA, Push Notifications e Meta-programação.',
        en: 'Developed PWA, Push Notifications and Meta-programming projects.'
    },
    {
        pt: 'Desenvolveu projectos para órgãos do governo.',
        en: 'Developed projects for government agencies.'
    },
    {
        pt: 'Participação no Workshop da Google em Angola.',
        en: 'Participation in the Google Workshop in Angola.'
    },
    {
        pt: 'Carta de Condução Ligeiro Profissional.',
        en: 'Light Professional Driving License.'
    }
]

var idiomas = [
    {
        nome: {
            pt: 'Português',
            en: 'Portuguese'
        },
        level: 5
    },
    {
        nome: {
            pt: 'Inglês',
            en: 'English'
        },
        level: 4
    },
    {
        nome: {
            pt: 'Kimbundu',
            en: 'Kimbundu'
        },
        level: 3
    }
]

var techs = [
    {
        title2: {
            pt: 'Linguagens de Programação:',
            en: 'Programming languages:'
        },
        techs: 'JavaScript, PHP, JAVA, HTML5, CSS, C#, C e Python'
    },
    {
        title2: {
            pt: 'Frameworks/Tecnologias:',
            en: 'Frameworks/Technologies:'
        },
        techs: 'Node Js , Laravel, Cakephp, ReactJs, React Native, Xamarin, Ionic, Angular, Electron, Adonis, Django.'
    },
    {
        title2: {
            pt: 'Sistemas Operativos:',
            en: 'Operating Systems:'
        },
        techs: 'Linux, Windows, MAC, Android e iOS'
    }
]

var certifications = [
    {
        pt: 'Gestão Ágil de Projectos (Tistech).',
        en: 'Agile Project Management (Tistech).'
    },
    {
        pt: 'Formação de Formadores (INEFOP).',
        en: 'Training of Trainers (INEFOP).'
    },
    {
        pt: 'Gestão e Concepção da Formação (INEFOP).',
        en: 'Training Management and Design (INEFOP).'
    }
]

var pers_competencias = [
    {
        pt: 'Espírito de equipa e liderança.',
        en: 'Team spirit and leadership.'
    },
    {
        pt: 'Excelente capacidade de comunicação.',
        en: 'Excellent communication skills.'
    },
    {
        pt: 'Capacidade para ambientes multiculturais.',
        en: 'Capacity for multicultural environments.'
    },
    {
        pt: 'Capacidade de trabalho sob pressão.',
        en: 'Ability to work under pressure.'
    },
    {
        pt: 'Sentido de organização.',
        en: 'Sense of organization.'
    },
    {
        pt: 'Capacidade de liderança.',
        en: 'Leadership ability.'
    }
]

function init() {
    let left = $one('#left');
    left.innerHTML = ''

    console.log(lang)

    handle_profile(left);
    handle_experiences(left);
    handle_formacoes(left);
    handle_info_adicionais(left);

    let right = $one('#right');
    // right.innerHTML = ''

    // handle_email(right);
    // handle_telefones(right);
    let idiomas = $one('#idiomas', { container: right});
    console.log('idiomas', idiomas);
    idiomas.innerHTML = handle_idiomas(right);
    // handle_tec_competencias(right);
    // handle_certifications(right);
    // handle_personal_competencias(right);
}

function handle_profile(container) {

    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = perfil.title[lang];

    let paragraph = $create('span');
    paragraph.classList.add('paragraph');
    paragraph.innerHTML = perfil.text[lang];

    container.appendChild(title);
    container.appendChild(paragraph);
}

function handle_experiences(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.experiencias[lang];

    container.appendChild(title);
    for (const expe of experiencias) {

        let row = $create('span');
        row.classList.add('row');
        row.classList.add('row-2');

        let title_1 = $create('span');
        title_1.classList.add('title-1');
        title_1.innerHTML = expe.role[lang];

        let title_2 = $create('span');
        title_2.classList.add('title-2');
        title_2.innerHTML = expe.company;

        let paragraph_1 = $create('span');
        paragraph_1.classList.add('paragraph-1');
        paragraph_1.innerHTML = expe.date[lang];

        let paragraph_2 = $create('span');
        paragraph_2.classList.add('paragraph-2');

        let bold = $create('span');
        bold.classList.add('bold');
        bold.innerHTML = expe.desc[lang];

        paragraph_2.appendChild(title_1);
        paragraph_2.appendChild(title_2);
        paragraph_2.appendChild(bold);
        
        row.appendChild(paragraph_1);
        row.appendChild(paragraph_2);

        container.appendChild(row);
    }
}

function handle_formacoes(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.formacoes[lang];

    container.appendChild(title);
    for (const expe of formacoes) {

        let row = $create('span');
        row.classList.add('row');
        row.classList.add('row-2');

        let title_1 = $create('span');
        title_1.classList.add('title-1');
        title_1.innerHTML = expe.role[lang];

        let title_2 = $create('span');
        title_2.classList.add('title-2');
        title_2.innerHTML = expe.company;

        let paragraph_1 = $create('span');
        paragraph_1.classList.add('paragraph-1');
        paragraph_1.innerHTML = expe.date[lang];

        let paragraph_2 = $create('span');
        paragraph_2.classList.add('paragraph-2');

        let bold = $create('span');
        bold.classList.add('bold');
        bold.innerHTML = expe.desc[lang];

        paragraph_2.appendChild(title_1);
        paragraph_2.appendChild(title_2);
        paragraph_2.appendChild(bold);

        row.appendChild(paragraph_1);
        row.appendChild(paragraph_2);

        container.appendChild(row);
    }
}

function handle_info_adicionais(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.info_adicionais[lang];

    container.appendChild(title);
    for (const expe of info_adicionais) {

        let row = $create('span');
        row.classList.add('row');

        let paragraph = $create('span');
        paragraph.classList.add('paragraph');
        paragraph.classList.add('item-list');
        paragraph.innerHTML = expe[lang];

        row.appendChild(paragraph);
        container.appendChild(row);
    }
}

function handle_email(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.email;

    container.appendChild(title);

    let row = $create('span');
    row.classList.add('row');

    let paragraph = $create('span');
    paragraph.classList.add('paragraph');
    paragraph.classList.add('item-list');
    paragraph.innerHTML = 'quirinda@hotmail.com';

    row.appendChild(paragraph);
    container.appendChild(row);

}

function handle_telefones(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.telefone[lang];

    container.appendChild(title);

    let row = $create('span');
    row.classList.add('row');

    let paragraph = $create('span');
    paragraph.classList.add('paragraph');
    paragraph.classList.add('item-list');
    paragraph.innerHTML = '+244 925 260 869';

    row.appendChild(paragraph);
    container.appendChild(row);
}

function handle_idiomas(container) {
    return;
    let html = `<span class='row title'>${titles.idiomas[lang]}</span>`

    // let title = $create('span');
    // title.classList.add('row');
    // title.classList.add('title');
    // title.innerHTML = titles.idiomas[lang];

    // container.appendChild(title);

    for (const expe of idiomas) {

        html += `<span class='row'>`
        // let row = $create('span');
        // row.classList.add('row');

        html += `<span class='paragraph item-list'>${expe.nome[lang]}</span>`
        // let paragraph = $create('span');
        // paragraph.classList.add('paragraph');
        // paragraph.classList.add('item-list');
        // paragraph.innerHTML = expe.nome[lang];

        // row.appendChild(paragraph);
        html += `</span>`
        // container.appendChild(row);
    }

    return html;
}

function handle_tec_competencias(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.tec_competencias[lang];

    container.appendChild(title);

    for (const expe of techs) {

        let row = $create('span');
        row.classList.add('row');

        let title2 = $create('span');
        title2.classList.add('title-3');
        title2.innerHTML = expe.title2[lang];

        let paragraph = $create('span');
        paragraph.classList.add('item-list');
        paragraph.innerHTML = expe.techs;

        row.appendChild(title2);
        row.appendChild(paragraph);
        container.appendChild(row);
    }
}

function handle_certifications(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.certifications[lang];

    container.appendChild(title);

    for (const expe of certifications) {

        let row = $create('span');
        row.classList.add('row');

        let paragraph = $create('span');
        paragraph.classList.add('item-list');
        paragraph.innerHTML = expe[lang];

        row.appendChild(paragraph);
        container.appendChild(row);
    }
}

function handle_personal_competencias(container) {
    let title = $create('span');
    title.classList.add('row');
    title.classList.add('title');
    title.innerHTML = titles.pers_competencias[lang];

    container.appendChild(title);

    for (const expe of pers_competencias) {

        let row = $create('span');
        row.classList.add('row');

        let paragraph = $create('span');
        paragraph.classList.add('item-list');
        paragraph.innerHTML = expe[lang];

        row.appendChild(paragraph);
        container.appendChild(row);
    }
}

function $one(sentence, params = {}) {
    let { container = document } = params;
    return container.querySelector(sentence);
}

function $all(sentence) {
    return document.querySelectorAll(sentence);
}

function $create(element) {
    return document.createElement(element);
}

function getLang() {
    return document.location.pathname?.substring(1);
}