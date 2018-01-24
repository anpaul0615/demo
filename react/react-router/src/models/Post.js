const Post = {
    // data
    data: [
        {id:1, title:'title 1', content:'content 1111'},
        {id:2, title:'title 2', content:'content 2222'},
        {id:3, title:'title 3', content:'content 3333'}
    ],

    // create new Post
    add: function(title,content){
        this.data.push({
            id: this.data.length()+1,
            title,
            content
        });
    },

    // find a Post
    findById: function(id){
        return this.data.find((p)=>{
            return id === p.id;
        }) || null;
    },

    // show all Post
    showAll: function(){
        return this.data;
    }
};

export default Post;