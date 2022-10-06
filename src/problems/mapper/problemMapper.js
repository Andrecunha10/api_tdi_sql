class ProblemMapper {

    static problemAndSuggestion (problem) {
        return  {
                id: problem.id,
                name: problem.name,
                description: problem.description,
                shortDescription: problem.shortDescription,
                departament: problem.departament,
                suggestions: problem.Suggestions.map(item => {
                    return {
                        id: item.id,
                        message: item.message,
                        user: {
                            id: item.User.id,
                            name: item.User.name,
                            nickname: item.User.nickname,
                            email: item.User.email,
                            departament: item.User.departament
                        }
                    }
                })               
            }
    }
}

module.exports = ProblemMapper;