fetch('https://randomuser.me/api/').then(res => {
    if(res.ok){
        console.log('SUCCESS')
    }else{
        console.log("Not Successful")
    }
}).then(data => console.log(data)).catch(error => console.log('ERROR'))