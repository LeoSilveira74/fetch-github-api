const user = {
    avatarUrl: '',
    name: '',
    bio:'',
    userName:'',
    repositories:[],
    followers: '',
    following: '',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followersUrl = gitHubUser.followers
        this.followingUrl = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    }

}

export { user }
