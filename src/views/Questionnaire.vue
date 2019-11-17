<template>
    <div>
        <!-- Affiche les questions tant que le numéro de la page est inférieur au nombre de question voulu -->
        <b-card v-if="this.page <= this.questions.nb" class="mt-3" header="Questionnaire" :footer="this.page+'/'+this.questions.nb">
            <Question :index="this.page/this.questions.nb" :question="askedQuestion.questions[page]" @before="page--" @resultQuestion="resultQuestion"></Question>
        </b-card>

        <!-- Affiche le résultat des questions si le numéro de la page est supérieur au nombre de question voulu -->
        <b-card v-if="this.page > this.questions.nb" class="mt-3" header="Résultats">
            <Result :questions="askedQuestion"></Result>
        </b-card>
    </div>
</template>

<script>
    import Question from '../components/paQuestion.vue'
    import Result from '../components/paResult.vue'
    import questions from '../assets/paQuestionnaire.json'
    export default {
        data: function () {
            return {
                user: null,
                questions,
                askedQuestion:{user:this.user,score:0,questions:[]},
                page:0
            }
        },
        components: {
            Question,
            Result
        },
        mounted() {
            try {
                this.user = JSON.parse(sessionStorage.getItem("currentUser"))
            } catch (e) {
                this.$router.push("/")
            }
            // Si le nombre de questions voulu est supérieur au nombre de questions existantes
            if(questions.nb>questions.questions.length){
                // Modifie le nombre de questions voulu par le nombre de questions existantes
                questions.nb = questions.questions.length
            }
            var i = 0;
            var pages=[]
            // Créer une nouvelle page tant que le nombre de questions voulu n'est pas atteints
            while( i<=questions.nb){
                let random = Math.floor(Math.random() * Math.floor(questions.questions.length))
                if(pages.indexOf(random) === -1){
                    pages.push(random);
                    this.askedQuestion.questions.push(questions.questions[random])
                    i++
                }
            }
        },
        methods: {
            // Vérifie si la réponse de l'utilisateur correspond à la bonne réponse
            resultQuestion(question){
                this.questions.questions.map((q) => {
                    if(q.titre === question.titre){
                        q.choix = question.choix
                    }
                })
                this.page++
            }
        }
    }
</script>