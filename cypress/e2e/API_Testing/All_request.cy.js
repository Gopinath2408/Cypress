describe("Api testing", () => {

    it("Post request", () => {


        cy.request({
            method: "Post",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        }).then((res) => {
            expect(res.status).to.be.eq(201);
        });

    })



    it("Get request", () => {

        cy.request({
            method: "Get",
            url: "https://jsonplaceholder.typicode.com/posts/1", 
        }).then((Response) => {
            expect(Response.status).to.be.eq(200);
            expect(Response.body.title).to.be.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"); 

        });
    });
})

