# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

questions = [
    {
        difficulty: 1,
        question: "Eurobeat is primarily an Italian genre of music.",
        correct_answer: "True",
        incorrect_answers: [
            "False"
        ]
    },
    {
        difficulty: 3,
        question: "Which country is completely landlocked by South Africa?",
        correct_answer: "Lesotho",
        incorrect_answers: [
            "Swaziland",
            "Botswana",
            "Zimbabwe"
        ]
    },
    {
        difficulty: 2,
        question: "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
        correct_answer: "Taiwan",
        incorrect_answers: [
            "United States",
            "Germany",
            "China (People&#039;s Republic of)"
        ]
    },
    {
        difficulty: 3,
        question: "The difference between the lengths of a Boeing 777-300ER and an Airbus A350-1000 is closest to:",
        correct_answer: "0.1m",
        incorrect_answers: [
            "1m",
            "10m ",
            "100m"
        ]
    },
    {
        difficulty: 2,
        question: "Madonna&#039;s song &quot;Hung Up&quot; includes a piece from which popular 70s song?",
        correct_answer: "Gimmie! Gimmie! Gimme! (A Man After Midnight)",
        incorrect_answers: [
            "Staying Alive",
            "Night Fever",
            "The Chain"
        ]
    },
    {
        difficulty: 2,
        question: "Which city did Anger berate for ruining pizza in &quot;Inside Out&quot;?",
        correct_answer: "San Francisco",
        incorrect_answers: [
            "Minnesota",
            "Washington",
            "California"
        ]
    },
    {
        difficulty: 2,
        question: "If you grab the bladed end of a longsword in a specific way, you will not cut yourself.",
        correct_answer: "True",
        incorrect_answers: [
            "False"
        ]
    },
    {
        difficulty: 2,
        question: "Where was Kanye West born?",
        correct_answer: "Atlanta, Georgia",
        incorrect_answers: [
            "Chicago, Illinois",
            "Los Angeles, California",
            "Detroit, Michigan"
        ]
    },
    {
        difficulty: 1,
        question: "Which of the following won the first season of American Idol in 2002?",
        correct_answer: "Kelly Clarkson",
        incorrect_answers: [
            "Justin Guarini",
            "Ruben Studdard",
            "Chris Daughtry"
        ]
    },
    {
        difficulty: 2,
        question: "Minecraft wasn&rsquo;t the original name to Minecraft.",
        correct_answer: "True",
        incorrect_answers: [
            "False"
        ]
    }
]

questions.each do |question|
    q = Question.create(content: question[:question], difficulty: question[:difficulty])
    q.answers.create(content: question[:correct_answer], correct: true)
    question[:incorrect_answers].each do |answer| 
        q.answers.create(content: answer, correct: false)
    end
end