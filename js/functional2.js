import faunadb from 'faunadb'
this.client = new faunadb.Client({
    secret: token || this.bootstrapToken
}) 

function createUser() {
    const data = {
        data: {
            name: document.getElementById('name').value,
            firstname: document.getElementById('firstname').value,
            addressline: document.getElementById('addressline').value,
            domicile: document.getElementById('domicile').value,
            email: document.getElementById("Email").value,
            created: Now()
        }
    }
   
    const query = Create(Collection('Users'), data )
    return client.query(query)
}
   
   


//faunadb key = fnAEEBQAbDACB37BVwIlBzNIei6vkbCUP7soWVqX