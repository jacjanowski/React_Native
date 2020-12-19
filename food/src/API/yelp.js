import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xDzgQlDvyFYNfwe-BbmQPpG4UIXUOocacocpiU0_jVz-KtiDqysFLUhQzZFYR3Y0Rqi5l4bNUEV0SmKcJmKA61NuIDDPdAC9dwAzBgns6nMOrILhU7TKu1dadyrdX3Yx'
    }


});


