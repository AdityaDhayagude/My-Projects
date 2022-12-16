//INIT GITHUB
const github = new Github;

//SEARCH INPUT
const searchUser = document.getElementById('searchUser');

//Search Input Event Listner
searchUser.addEventListener('keyup',(e) => 
{
    //GET INPUT TEXT
    const userText = e.target.value;

    if(userText != '')
    {
        //MAKE HTTP CALL
        Github.getUser(userText).then
        (
            data =>
            {
                if(data.profile.message === 'Not Found');
                else
                {
                    //SHOW PROFILE
                    Uint16Array.showProfile(data.profile)
                }
            }
        )
    }
    else
    {
        //CLEAR POFILE
    }
}
);