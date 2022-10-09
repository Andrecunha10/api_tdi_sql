class SuggestionMapper {

    static multiplusSuggestions (suggestions) {
        return suggestions.map(item => {
            return {
                id: item.id,
                message: item.message,
                problemId: item.problemId,
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

    static oneSuggestion ({id, message, Problem, User}) {
        return {
            id,
            message,
            problem:{
                id: Problem.id,
                name: Problem.name,
                description: Problem.description,
                shortDescription: Problem.shortDescription,
                departament: Problem.departament
            },
            user: {
                id: User.id,
                name: User.name,
                nickname: User.nickname,
                email: User.email,
                departament: User.departament
            }
        }
    }

    static userSuggestions (suggestions) {
        return suggestions.map( item => {
            return {
                id: item.id,
                message: item.message,
                problem: {
                    id: item.Problem.id,
                    name: item.Problem.name,
                    departament: item.Problem.departament,
                    description: item.Problem.description,
                    shortDescription: item.Problem.shortDescription
                },
                user: {
                    id: item.User.id,
                    name: item.User.name,
                    nickname: item.User.nickname,
                    departament: item.User.departament,
                    email: item.User.email
                }
            }
        })
    }
}

module.exports = SuggestionMapper;