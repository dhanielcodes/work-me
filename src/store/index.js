import { createStore } from 'vuex'

const store = createStore({
    state:{
        beginner: [
          {
            name:'Jumping Jax (Warm up)',
            amount: '10 reps',
            done: true,
            info: 'Bend your knees slightly, and jump into the air As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head Jump back to starting position'
          },
          {
            name:'Abdominal Crunches',
            amount: '16 reps',
            done: true,
            info: 'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale. Exhale and lift your upper body, keeping your head and neck relaxed Inhale and return to the starting position.'
          },{
            name:'Push ups',
            amount: '8 reps',
            done: true,
            info: 'Get down on all fours, placing your hands slightly wider than your shoulders. Straighten your arms and legs. Lower your body until your chest nearly touches the floor. Pause, then push yourself back up.'
          },
          {
            name:'Lunges',
            amount: '15 reps',
            done: true,
            info: "Start by standing up tall. Step forward with one foot until your leg reaches a 90-degree angle. Lift your front lunging leg to return to the starting position. Repeat 10 to 12 reps on one leg, or switch off between legs until you've totaled 10 to 12 reps per leg."
          },
          {
            name:'Heel touch',
            amount: '15 reps',
            done: true,
            info: "Lay down with your back on the ground and your knees bent and pointed towards the ceiling. With your arms on your side raise your shoulders slightly off the ground. Using your abs rotate your right hand down to your right foot and then back up."
          },
          {
            name:'Knee push ups',
            amount: '11 reps',
            done: true,
            info: "Start in high plank with your shoulders above your wrists and your spine long. Drop to your knees, rolling to the top of your knees to protect your knee caps. Bend your elbows and lower your chest to the ground. Push through the palms of your hands to straighten your arms."
          },
          {
            name:'Squats',
            amount: '20 reps',
            done: true,
            info: "Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN."
          },
          {
            name:'Cobra stretch',
            amount: '30 secs',
            done: true,
            info: "Lie on your stomach with your forehead. And the tops of your feet against the mat your palms should be faced down and next to your chest your elbows bent and tucked close to your sides."
          },
          {
            name:'Chest stretch',
            amount: '30 secs',
            done: true,
            info: "Standing with your feet shoulder-width apart, place your right hand atop a bench or other stable object between waist and chest height. Straighten your arm, and slowly turn to the left until you feel the stretch in your chest without forcing it. Hold for a six-count, and repeat on the other side."
          },
          {
            name:'Shoulder stretch',
            amount: '30 secs',
            done: true,
            info: "Stand in a doorway and place one arm against the door frame. Your elbow should be a little higher than your shoulder. Relax your shoulders as you lean forward, allowing your chest and shoulder muscles to stretch. Hold for 15 to 30 seconds. Repeat 2 to 4 times with each arm."
          }

        ],
    }
})

export default store