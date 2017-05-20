export default class WordGenerator {
    generate(count = 10) {
        let words = [{
            spanish: {
                word: 'Hola'
            },
            english: {
                word: 'Hello'
            },
            chinese: {
                word: '你好'
            }
        }, {
            spanish: {
                word: 'Por favor'
            },
            english: {
                word: 'Please'
            },
            chinese: {
                word: '请'
            }
        }, {
            spanish: {
                word: 'Gracias'
            },
            english: {
                word: 'Thank you'
            },
            chinese: {
                word: '谢谢'
            }
        }, {
            spanish: {
                word: 'Muchas gracias'
            },
            english: {
                word: 'Thank you very much'
            },
            chinese: {
                word: '非常感谢你'
            }
        }, {
            spanish: {
                word: 'Adiós'
            },
            english: {
                word: 'Goodbye'
            },
            chinese: {
                word: '再见'
            }
        }, {
            spanish: {
                word: '¿Cómo estás?'
            },
            english: {
                word: 'How are you?'
            },
            chinese: {
                word: '你好吗？'
            }
        }, {
            spanish: {
                word: 'Muy bien'
            },
            english: {
                word: 'Very well'
            },
            chinese: {
                word: '非常好'
            }
        }, {
            spanish: {
                word: 'Más o menos'
            },
            english: {
                word: 'so so'
            },
            chinese: {
                word: '马马虎虎'
            }
        }, {
            spanish: {
                word: 'De nada'
            },
            english: {
                word: 'You are welcome'
            },
            chinese: {
                word: '不客气'
            }
        }, {
            spanish: {
                word: 'Disculpe'
            },
            english: {
                word: 'Excuse me'
            },
            chinese: {
                word: '打扰一下'
            }
        }, {
            spanish: {
                word: 'Lo siento'
            },
            english: {
                word: 'I am sorry'
            },
            chinese: {
                word: '对不起'
            }
        }, {
            spanish: {
                word: 'Si'
            },
            english: {
                word: 'Yes'
            },
            chinese: {
                word: '是'
            }
        }, {
            spanish: {
                word: 'No'
            },
            english: {
                word: 'No'
            },
            chinese: {
                word: '不是'
            }
        }, {
            spanish: {
                word: 'Quizás'
            },
            english: {
                word: 'Maybe'
            },
            chinese: {
                word: '可能'
            }
        }, {
            spanish: {
                word: '¿Hablas ...?',
                example: 'Hablas Español?'
            },
            english: {
                word: 'Do you speak ...?'
            },
            chinese: {
                word: '你会说 ...?'
            }
        }, {
            spanish: {
                word: 'No hay problema'
            },
            english: {
                word: 'No problem'
            },
            chinese: {
                word: '没问题'
            }
        }, {
            spanish: {
                word: 'Bien'
            },
            english: {
                word: 'Good'
            },
            chinese: {
                word: '好'
            }
        }, {
            spanish: {
                word: 'Perfecto'
            },
            english: {
                word: 'Perfect'
            },
            chinese: {
                word: '完美的'
            }
        }, {
            spanish: {
                word: 'Está bian'
            },
            english: {
                word: 'All right'
            },
            chinese: {
                word: '好的'
            }
        }, {
            spanish: {
                word: '¿Puedo?',
                example: 'puedo is the present form of poder in the first person singular and roughly translates to I can.'
            },
            english: {
                word: 'May I ?'
            },
            chinese: {
                word: '我能？'
            }
        }, {
            spanish: {
                word: '¿Podemos?'
            },
            english: {
                word: 'Can we?'
            },
            chinese: {
                word: ''
            }
        }, {
            spanish: {
                word: '¿Baño?'
            },
            english: {
                word: 'Toilet?'
            },
            chinese: {
                word: '厕所?'
            }
        }, {
            spanish: {
                word: 'Salida'
            },
            english: {
                word: 'Exit'
            },
            chinese: {
                word: '出口'
            }
        }, {
            spanish: {
                word: 'Entrada'
            },
            english: {
                word: 'Entrance'
            },
            chinese: {
                word: '入口'
            }
        }, {
            spanish: {
                word: 'Habla más lento'
            },
            english: {
                word: 'Spleak slowy'
            },
            chinese: {
                word: '说慢一点'
            }
        }, {
            spanish: {
                word: 'No entiendo'
            },
            english: {
                word: 'I do not understand'
            },
            chinese: {
                word: '我不理解'
            }
        }, {
            tags: ['powerful phrase', 'essential'],
            spanish: {
                word: 'Por favor repita'
            },
            english: {
                word: 'Please repeat'
            },
            chinese: {
                word: '请重复一遍'
            }
        }, {
            tags: ['powerful phrase', 'essential'],
            spanish: {
                word: '¿Podría ayudarme?'
            },
            english: {
                word: 'Can you help me?'
            },
            chinese: {
                word: '你能帮我吗？'
            }
        }, {
            tags: ['powerful phrase', 'essential'],
            spanish: {
                word: '¿Podría ayudarnos?'
            },
            english: {
                word: 'Can you help us?'
            },
            chinese: {
                word: '你能帮我们吗？'
            }
        }, {
            tags: ['powerful phrase', 'essential'],
            spanish: {
                word: '¿Podría ayudarnos?'
            },
            english: {
                word: 'Can you help us?'
            },
            chinese: {
                word: '你能帮我们吗？'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: '¿Qué?'
            },
            english: {
                word: 'What?'
            },
            chinese: {
                word: '什么？'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: '¿Quién?'
            },
            english: {
                word: 'Who?'
            },
            chinese: {
                word: '谁？'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: '¿Cuándo?'
            },
            english: {
                word: 'When?'
            },
            chinese: {
                word: '什么时候？'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: '¿Por que?'
            },
            english: {
                word: 'Why?'
            },
            chinese: {
                word: '为什么？'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Ahora'
            },
            english: {
                word: 'Now'
            },
            chinese: {
                word: '现在'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Luego'
            },
            english: {
                word: 'Later'
            },
            chinese: {
                word: '过一会儿'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Hoy'
            },
            english: {
                word: 'Today'
            },
            chinese: {
                word: '今天'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Mañana'
            },
            english: {
                word: 'Tomorrow'
            },
            chinese: {
                word: '明天'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Desayuno'
            },
            english: {
                word: 'Breakfast'
            },
            chinese: {
                word: '早餐'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Almuerzo'
            },
            english: {
                word: 'Lunch'
            },
            chinese: {
                word: '午餐'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Cena'
            },
            english: {
                word: 'Dinner'
            },
            chinese: {
                word: '晚餐'
            }
        }, {
            tags: ['powerful phrase', 'essential'],
            spanish: {
                word: '¿Qué hora es?'
            },
            english: {
                word: 'What time is it?'
            },
            chinese: {
                word: '现在是什么时间？'
            }
        }, {
            tags: ['powerful phrase', 'essential'],
            spanish: {
                word: 'Estoy perdido'
            },
            english: {
                word: 'I am lost'
            },
            chinese: {
                word: '我迷路了'
            }
        }, {
            tags: ['powerful phrase', 'essential'],
            spanish: {
                word: 'Estamos perdidos'
            },
            english: {
                word: 'We are lost'
            },
            chinese: {
                word: '我们迷路了'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Cuidado'
            },
            english: {
                word: 'Watch out!'
            },
            chinese: {
                word: '小心'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Detente!'
            },
            english: {
                word: 'Stop!'
            },
            chinese: {
                word: '停下'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: 'Sigue'
            },
            english: {
                word: 'Go'
            },
            chinese: {
                word: '走'
            }
        }, {
            tags: ['essential'],
            spanish: {
                word: '¿Ascensor?'
            },
            english: {
                word: 'Elevator?'
            },
            chinese: {
                word: '电梯？'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Uno'
            },
            english: {
                word: 'One'
            },
            chinese: {
                word: '一'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Dos'
            },
            english: {
                word: 'Two'
            },
            chinese: {
                word: '二'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Tres'
            },
            english: {
                word: 'Three'
            },
            chinese: {
                word: '三'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Cuatro'
            },
            english: {
                word: 'Four'
            },
            chinese: {
                word: '四'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Cinco'
            },
            english: {
                word: 'Five'
            },
            chinese: {
                word: '五'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Seis'
            },
            english: {
                word: 'Six'
            },
            chinese: {
                word: '六'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Siete'
            },
            english: {
                word: 'Seven'
            },
            chinese: {
                word: '七'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Ocho'
            },
            english: {
                word: 'Eight'
            },
            chinese: {
                word: '八'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Nueve'
            },
            english: {
                word: 'Nine'
            },
            chinese: {
                word: '九'
            }
        }, {
            tags: ['essential', 'numbers'],
            spanish: {
                word: 'Diez'
            },
            english: {
                word: 'Ten'
            },
            chinese: {
                word: '十'
            }
        }];

        return words;
    }
}
