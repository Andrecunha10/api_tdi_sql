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

    static oneSuggestion ({id, message, problemId, User}) {
        return {
            id,
            message,
            problemId,
            user: {
                id: User.id,
                name: User.name,
                nickname: User.nickname,
                email: User.email,
                departament: User.departament
            }
        }
    }
}

module.exports = SuggestionMapper;