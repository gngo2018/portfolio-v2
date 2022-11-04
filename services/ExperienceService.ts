export function GetAllExperiences() {
    const experiences = [
        { 
            id: 1, 
            title: 'Lead Software Developer', 
            dateRange: '2019-Current', 
            description: 'Took part in full project life cycle from business analysis to application development for ACE Rent a Car. Worked alongside a team of two developers utilizing .NET Core and Next JS.', 
            link: 'https://www.linkedin.com/company/ace-rent-a-car/',
            linkName: 'Ace Rent a Car',
            imageUrl: '/assets/Ace.jpg' 
        },
        { 
            id: 2, 
            title: 'Customer Service', 
            dateRange: '2016-2018', 
            description: 'Experienced with customer service through previous roles such as Drive Medical Customer Support and Wabash College Educational Technology Center.', 
            linkName: '',
            link: '', 
            imageUrl: '/assets/customer-service.jpg' 
        },
        { 
            id: 3, 
            title: 'Eleven Fifty Academy', 
            dateRange: 'Feb 2019', 
            description: '12 week bootcamp as a junior developer student working with C#, .Net Framework, HTML5, CSS3, Bootstrap, and Asp.Net.', 
            linkName: 'Eleven Fifty',
            link: 'https://www.elevenfifty.org/', 
            imageUrl: '/assets/eleven-fifty.jpg' 
        },
        { 
            id: 4, 
            title: 'Wabash College', 
            dateRange: 'Class of 2018', 
            description: 'Received Bachelor of Arts Degree majoring in German Studies and minored in Economics and History.', 
            linkName: 'Wabash',
            link: 'https://www.wabash.edu/', 
            imageUrl: '/assets/wabash.jpg' 
        },
    ]

    return experiences;
}