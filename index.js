window.addEventListener('DOMContentLoaded', () => {
    fetchTeam()

});

function fetchTeam() {
    fetch('https://www.balldontlie.io/api/v1/teams')
    .then(resp => resp.json()
    .then(function(teamArr) {
        teamArr.data.forEach(team => {
            addJersey(team)
        })
    })
)}

function addJersey(team) {
    if (team.id === 1) {
        team.image = 'https://content.sportslogos.net/logos/6/220/full/5mdhgjh3aa92kih09pgi.png'
    }
    else if (team.id === 2) {
        team.image = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png"
    }
    else if (team.id === 3) {
        team.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png"
    }
    else if (team.id === 4) {
        team.image = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/640px-Charlotte_Hornets_%282014%29.svg.png"
    }
    else if (team.id === 5) {
        team.image = "https://cdn11.bigcommerce.com/s-uqijfs/images/stencil/1280x1280/products/115756/132647/3208508091__32246.1573686166.jpg?c=2"
    } 
    else if (team.id === 6) {
        team.image = "https://www.cleveland.com/resizer/IdQUPZZSGUGyhe-f3SvrDoqb7FM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.cleveland.com/home/cleve-media/width2048/img/startingblocks/photo/new-cavaliers-primary-logojpg-ecde4d110d8b58e4.jpg"
    }
    else if (team.id === 7) {
        team.image = "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/800px-Dallas_Mavericks_logo.svg.png"
    }
    else if (team.id === 8) {
        team.image = "https://logos-world.net/wp-content/uploads/2020/05/Denver-Nuggets-Logo.png"
    }
    else if (team.id === 9) {
        team.image = "https://content.sportslogos.net/logos/6/223/full/444.gif"
    }
    else if (team.id === 10) {
        team.image = "https://logos-world.net/wp-content/uploads/2020/05/Golden-State-Warriors-logo.png"
    }
    else if (team.id === 11) {
        team.image = "https://logos-world.net/wp-content/uploads/2020/05/Houston-Rockets-logo.png"
    }
    else if (team.id === 12) {
        team.image = "https://logos-world.net/wp-content/uploads/2020/05/Indiana-Pacers-logo.png"
    }
    else if (team.id === 13) {
        team.image = "https://logos-world.net/wp-content/uploads/2020/05/Los-Angeles-Clippers-Logo-1985-2010.png"
    }
    else if (team.id === 14) {
        team.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png"
    }
    else if (team.id === 15) {
        team.image = "https://logos-world.net/wp-content/uploads/2020/05/Memphis-Grizzlies-Logo-2005-2018.png"
    }
    else if (team.id === 16) {
        team.image = 'https://1000logos.net/wp-content/uploads/2021/04/Miami-Heat-logo.png'
    }
    else if (team.id === 17) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/03/Milwaukee-Bucks-Logo.png'
    }
    else if (team.id === 18) {
        team.image = 'https://1000logos.net/wp-content/uploads/2017/08/Minnesota-Timberwolves-Logo-2008.jpg'
    }
    else if (team.id === 19) {
        team.image = 'https://1000logos.net/wp-content/uploads/2017/04/New-Orleans-Saints-Logo-2000.jpg'
    }
    else if (team.id === 20) {
        team.image = 'https://1000logos.net/wp-content/uploads/2017/12/New-York-Knicks-Logo-1992.jpg'
    }
    else if (team.id === 21) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/06/Oklahoma-City-Thunder-Logo.png'
    }
    else if (team.id === 22) {
        team.image = 'https://logos-world.net/wp-content/uploads/2020/05/Orlando-Magic-logo.png'
    }
    else if (team.id === 23) {
        team.image = 'https://1000logos.net/wp-content/uploads/2016/10/Philadelphia-76ers-Logo.png'
    }
    else if (team.id === 24) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/06/Phoenix-Suns-Logo-1968.jpg'
    }
    else if (team.id === 25) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/06/Portland-Trail-Blazers-logo-1.jpg'
    }
    else if (team.id === 26) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/06/Los-Angeles-Kings-Logo-1975.png'
    }
    else if (team.id === 27) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/01/San-Antonio-Spurs-Logo-2002.png'
    }
    else if (team.id === 28) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/05/Toronto-Raptors-logo.jpg'
    }
    else if (team.id === 29) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/05/Utah_Jazz_Logo.png'
    }
    else if (team.id === 30) {
        team.image = 'https://1000logos.net/wp-content/uploads/2018/05/Washington_Wizards_Logo.png'
    }
    console.log(team)
}


