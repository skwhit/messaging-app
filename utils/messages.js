export async function getMessages() {
    try {
        const response = await fetch('https://messaging-test.bixly.com', {method: 'GET'} );
        const user = await response.json();
        console.log(user);
    } catch(err) {
        console.log(err.message)
    }
   

}