const lang = 'pt';
console.log('bleed')

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
    }
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

function init() {
    let left = $one('#left');
    left.innerHTML = ''

    handle_profile(left);
    handle_experiences(left);
    handle_formacoes(left);
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

        paragraph_2.appendChild(bold);

        row.appendChild(title_1);
        row.appendChild(title_2);
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

        paragraph_2.appendChild(bold);

        row.appendChild(title_1);
        row.appendChild(title_2);
        row.appendChild(paragraph_1);
        row.appendChild(paragraph_2);

        container.appendChild(row);
    }
}

function $one(sentence) {
    return document.querySelector(sentence);
}

function $all(sentence) {
    return document.querySelectorAll(sentence);
}

function $create(element) {
    return document.createElement(element);
}