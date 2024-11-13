export const ifabQuestions = [
    {
        id: 1,
        question: 'Игрок атакующей команды, находящийся в положении «вне игры» (А) двигается к мячу, а партнёр по команде, находящийся в правильном положении (Б), также двигается к мячу и играет в мяч. Первый игрок (А) не касается мяча и не влияет на возможность соперника играть или бороться за мяч. Каково решение судьи?', 
        answers: [ 
            { 
                text: 'Судья разрешает продолжить игру, поскольку игрок атакующей команды (А) не совершил нарушения «вне игры».', 
                correct: true 
            }, 
            { 
                text: 'Судья запрещает продолжить игру, поскольку игрок атакующей команды (А) не совершил нарушения «вне игры».', 
                correct: false 
            }, 
            {
                text: 'Судья разрешает продолжить игру, поскольку игрок атакующей команды (А) виновен в нарушении правила «вне игры».', 
                correct: false 
            }, 
            { 
                text: 'Нет правильного ответа', 
                correct: false 
            } 
        ] 
    },
    {
        id: 2,
        question: 'Игрок (Команда А) совершил нарушение, заслуживающее второго предупреждения (желтая карточка, ЖК) в том же матче. Может ли судья разрешить Команде Б быстрый розыгрыш штрафного удара? Когда судья должен предупредить (ЖК) и удалить (красная карточка, КК) нарушителя?', 
        answers: [ 
            { 
                text: 'Судья может разрешить быстрый розыгрыш штрафного удара только в том случае, если это создает очень хорошие шансы забить гол, и, если он еще не начал вынесение дисциплинарных санкций. Игроку выносится вторая ЖК и КК в момент следующей остановки.', 
                correct: false 
            }, 
            { 
                text: 'Судья не разрешает быстрый розыгрыш штрафного удара. Игра возобновляется свободным ударом. Однако, если наказуемое второй ЖК нарушение было срывом перспективной атаки, желтая карточка больше не выносится (так как быстрый розыгрыш штрафного удара эффективно «восстановил» «потерянную» перспективную атаку).', 
                correct: false 
            }, 
            {
                text: 'Судья может разрешить быстрый розыгрыш штрафного удара только в том случае, если это создает очень хорошие шансы забить гол, и, если он еще не начал вынесение дисциплинарных санкций. Игроку выносится вторая ЖК и КК в момент следующей остановки, если только он/она не вмешивается в игру: в этом случае судья сразу останавливает игру, выносит вторую ЖК, и удаляет игрока.  Игра возобновляется свободным ударом. Однако, если наказуемое второй ЖК нарушение было срывом перспективной атаки, желтая карточка больше не выносится (так как быстрый розыгрыш штрафного удара эффективно «восстановил» «потерянную» перспективную атаку).', 
                correct: true 
            }, 
            { 
                text: 'Нет правильного ответа', 
                correct: false 
            } 
        ] 
    },
    {
        id: 3,
        question: 'Во время «спорного» мяча, игрок, который не является игроком, для которого брошен «спорный» мяч, подходит ближе, чем требуемые 4 м от мяча. Каково решение судьи?', 
        answers: [ 
            { 
                text: ' Судья потребует, чтобы игрок соблюдал требуемое расстояние. Санкции к игроку не применяются', 
                correct: false 
            }, 
            { 
                text: 'Судья потребует, чтобы игрок соблюдал требуемое расстояние; если игрок этого не сделает, то игрок будет предупрежден (желтая карточка, ЖК)', 
                correct: true 
            }, 
            {
                text: ' Судья выносит игроку предупреждение',
                correct: false 
            }, 
            { 
                text: 'Судья удаляет игрока и возобновляет игру свободным ударом', 
                correct: false 
            } 
        ] 
    },
    {
        id: 4,
        question: 'Игрок совершает нарушение, заслуживающее предупреждения (желтая карточка, ЖК), но судья применяет принцип преимущества. После этого тот же игрок совершает второе нарушение заслуживающее ЖК. Каково решение судьи?', 
        answers: [ 
            { 
                text: 'Игроку будет вынесена желтая карточка, затем вторая желтая карточка и, как следствие, красная карточка, и он будет удален, даже первое нарушение не было "вмешательством в или срывом перспективной атаки"', 
                correct: false 
            }, 
            { 
                text: 'Никакие санкции к игркоу не применяются', 
                correct: false 
            }, 
            {
                text: 'Игроку будет вынесена желтая карточка, затем вторая желтая карточка и, как следствие, красная карточка, и он будет удален', 
                correct: false 
            }, 
            { 
                text: 'Игроку будет вынесена желтая карточка, затем вторая желтая карточка и, как следствие, красная карточка, и он будет удален, если только первое нарушение не было "вмешательством в или срывом перспективной атаки", в этом случае за это нарушение не выносится желтая карточка (поскольку преимущество эффективно восстановило перспективную атаку)', 
                correct: true 
            } 
        ] 
    },
    {
        id: 5,
        question: 'Вступая в борьбу за мяч, вратарь сначала касается мяча, а затем вступает в контакт с его/ ее соперником, наказывается ли это действие судьей?', 
        answers: [ 
            { 
                text: 'Нет, никогда', 
                correct: false 
            }, 
            { 
                text: 'Да, если игрок совершил безрассудный фол', 
                correct: false 
            }, 
            {
                text: 'Это будет зависеть от точного характера единоборства, поскольку игра в мяч (первая) не обязательно означает, что действие является "законным", например, если приём безрассудный или используется чрезмерная сила, когда контакт происходит с мячом и противником одновременно.', 
                correct: true 
            }, 
            { 
                text: 'Да, если только игрок совершил серьезное нарушение Правил Игры', 
                correct: false 
            } 
        ] 
    },
    {
        id: 6,
        question: 'Игрок защищающейся команды выполняет штрафной/свободный удар и случайно забивает мяч в собственные ворота своей команды. Как возобновляется игра?', 
        answers: [ 
            { 
                text: 'Если мяч со штрафного или свободного удара попадает непосредственно в собственные ворота команды, угловой удар назначается в пользу команды соперника', 
                correct: true 
            }, 
            { 
                text: 'Если мяч со штрафного или свободного удара попадает непосредственно в собственные ворота команды, гол засчитывается', 
                correct: false 
            }, 
            {
                text: 'Если мяч со штрафного или свободного удара попадает непосредственно в собственные ворота команды, назначается удар от ворот', 
                correct: false 
            }, 
            { 
                text: 'Если мяч со штрафного или свободного удара попадает непосредственно в собственные ворота команды, назначается пенальти', 
                correct: false 
            } 
        ] 
    },
    {
        id: 7,
        question: 'В то время, мяч находится в игре, судья видит, как два игрока одной команды дерутся друг с другом на игровом поле. Каковы санкции и возобновление?', 
        answers: [ 
            { 
                text: 'Оба игрока должны быть удалены (красная карточка, КК) за агрессивное поведение. Игра возобновляется спорным мячом', 
                correct: false 
            }, 
            { 
                text: 'Оба игрока должны быть удалены (красная карточка, КК) за агрессивное поведение. Физические нарушения в отношении партнера по команде на игровом поле наказываются штрафным ударом или 11-метровым (если они совершены в пределах штрафной площади нарушителей)', 
                correct: true 
            }, 
            {
                text: 'Оба игрока должны быть предупреждены (желтая карточка, ЖК) за безрассудное поведение. Физические нарушения в отношении партнера по команде на игровом поле наказываются штрафным ударом или 11-метровым (если они совершены в пределах штрафной площади нарушителей)', 
                correct: false 
            }, 
            { 
                text: 'Оба игрока должны быть удалены (красная карточка, КК) за агрессивное поведение. Физические нарушения в отношении партнера по команде на игровом поле наказываются свободным ударом', 
                correct: false 
            } 
        ] 
    },
    {
        id: 8,
        question: 'Игрок (Команда А) выполняет вбрасывание. После того, как мяч вошёл в игру, он попадает в судью и покидает поле через боковую линию, не касаясь других игроков. Как возобновляется игра?', 
        answers: [ 
            { 
                text: 'Судья назначит вбрасывание игроком этой же команды (Команда А), поскольку в Правиле 9 четко указано, что «спорный» мяч назначается только тогда, когда мяч остается на поле', 
                correct: false 
            }, 
            { 
                text: 'Судья назначает спорный мяч для игрока команды А', 
                correct: false 
            }, 
            {
                text: 'Судья назначает спорный мяч для игрока команды Б', 
                correct: false 
            }, 
            { 
                text: 'Судья назначит вбрасывание в пользу соперника (Команда Б), поскольку в Правиле 9 четко указано, что «спорный» мяч назначается только тогда, когда мяч остается на поле', 
                correct: true 
            } 
        ]
    },
    {
        id: 9,
        question: 'Разрешается ли игроку использовать удар "велосипед/ножницы", чтобы сыграть в мяч?', 
        answers: [ 
            { 
                text: 'Удар ножницами или велосипедом допустим, если он не опасен для соперника. Если действия игрока расцениваются как игра в опасной манере, судья назначает свободный удар в пользу команды соперника; если есть контакт, это штрафной удар', 
                correct: true 
            }, 
            { 
                text: 'Удар ножницами или велосипедом запрещен, если он опасен для соперника. Назначается свободный удар', 
                correct: false 
            }, 
            {
                text: 'Удар ножницами или велосипедом допустим, если он не опасен для соперника. Если действия игрока расцениваются как игра в опасной манере, судья назначает это штрафной удар', 
                correct: false 
            }, 
            { 
                text: 'Нет правильного ответа', 
                correct: false 
            } 
        ]
    },
    {
        id: 10,
        question: 'Вратарь держит мяч на вытянутой открытой руке, а игрок соперника пытается ударить по мячу. Какое возобновление и санкции?', 
        answers: [ 
            { 
                text: 'С вратарем нельзя вступать в борьбу, когда он контролирует мяч рукой(руками). Игра возобновляется свободным ударом (нет контакта) или штрафным ударом (есть контакт) - нарушение наказывается удаление (красная карточка, КК)', 
                correct: false 
            }, 
            { 
                text: 'С вратарем нельзя вступать в борьбу, когда он контролирует мяч рукой(руками). Игра возобновляется свободным ударом (нет контакта) или штрафным ударом (есть контакт) - нарушение наказывается предупреждением (желтая карточка, ЖК), если оно срывает перспективную атаку или если действие безрассудное.', 
                correct: true 
            }, 
            {
                text: 'С вратарем нельзя вступать в борьбу, когда он контролирует мяч рукой(руками). Игра возобновляется свободным ударом (нет контакта) или штрафным ударом (есть контакт) - нарушение наказывается предупреждением.', 
                correct: false 
            }, 
            { 
                text: 'С вратарем нельзя вступать в борьбу, когда он контролирует мяч рукой(руками). Игра возобновляется спорным мячом', 
                correct: false 
            } 
        ]
    },
    {
        id: 1,
        question: 'получения разрешения на выход. Какие санкции?', 
        answers: [ 
            { 
                text: 'Если это действие происходит, когда мяч находится в игре, судья наказывает игрока свободным ударом и удалением (красная карточка, КК)', 
                correct: false 
            }, 
            { 
                text: 'Если это действие происходит, когда мяч находится в игре, судья наказывает игрока штрафным ударом и предупреждением (желтая карточка, ЖК)', 
                correct: false 
            }, 
            {
                text: 'Если это действие происходит, когда мяч находится в игре, судья наказывает игрока свободным ударом', 
                correct: false 
            }, 
            { 
                text: 'Если это действие происходит, когда мяч находится в игре, судья наказывает игрока свободным ударом и предупреждением (желтая карточка, ЖК)', 
                correct: true 
            } 
        ] 
    },
]

// {
//     id: 4,
//     question: '', 
//     answers: [ 
//         { 
//             text: '', 
//             correct: false 
//         }, 
//         { 
//             text: '', 
//             correct: false 
//         }, 
//         {
//             text: '', 
//             correct: false 
//         }, 
//         { 
//             text: '', 
//             correct: true 
//         } 
//     ] 
// },