//creating the "Posts" table
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: { //define the "title" attribute
            type: DataTypes.STRING, //define the title type as string
            allowNull: false, //define that this attribute cant't recieve null values
        },

        postText: { //define the "postText" attribute, wich is where you can write your post content
            type: DataTypes.STRING, //define the postText type as string
            allowNull: false, //define that this attribute cant't recieve null values
        },

        username: { // define the "username"attribute
            type: DataTypes.STRING, // define the username type as string
            allowNull: false, //define that this attribute cant't recieve null values
        },
    })

    return Posts //define what the function needs to return
}