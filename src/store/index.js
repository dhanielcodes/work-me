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
        advance: [
          {
            name:'Jumping Jax (Warm up)',
            amount: '10 reps',
            done: true,
            info: 'Bend your knees slightly, and jump into the air As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head Jump back to starting position'
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
            name:'Abdominal Crunches',
            amount: '16 reps',
            done: true,
            info: 'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale. Exhale and lift your upper body, keeping your head and neck relaxed Inhale and return to the starting position.'
          },
          {
            name:'Squats',
            amount: '20 reps',
            done: true,
            info: "Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN."
          },
          {
            name:'Push ups',
            amount: '8 reps',
            done: true,
            info: 'Get down on all fours, placing your hands slightly wider than your shoulders. Straighten your arms and legs. Lower your body until your chest nearly touches the floor. Pause, then push yourself back up.'
          },




          {
            name:'Mountain climber',
            amount: '16 reps',
            done: true,
            info: 'Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion, switch your legs, keeping your arms in the same position. In one smooth motion, switch your legs, keeping your arms in the same position.'
          },
          {
            name:'Donkey kicks',
            amount: '15 reps',
            done: true,
            info: 'Position yourself on all fours on a mat. Position your hands underneath your shoulders and place your knees under your hips. Keep your right knee bent at 90 degrees and flex the foot as you lift the knee until it is level with the hip. Lower the knee without touching the floor and repeat the lift.'
          },
          {
            name:'Step ups',
            amount: '10 reps',
            done: true,
            info: 'To start, place your entire right foot onto the bench or chair. Press through your right heel as you step onto the bench, bringing your left foot to meet your left so you are standing on the bench. Return to the starting position by stepping down with the right foot, then the left so both feet are on the floor.'
          },
          {
            name:'Plank',
            amount: '30 secs',
            done: true,
            info: 'Get in the pushup position, only put your forearms on the ground instead of your hands. Squeeze your glutes and tighten your abdominals. Keep a neutral neck and spine. Create a straight, strong line from head to toes – a plank, if you will. Hold that position.'
          },
          {
            name:'Decline Push ups',
            amount: '8 reps',
            done: true,
            info: 'Kneel down with your back to the bench. Put your hands on the floor, shoulders over your wrists and elbows at 45 degrees. Brace your core, glutes, and quads. Push into the floor to return to starting position, extending your elbows. Complete 2 to 4 sets of 8 to 20 repetitions'
          },
          {
            name:'Wall calf raises',
            amount: '11 reps',
            done: true,
            info: 'Starting Position: Stand 6 -12" away from a wall with your feet hip-width apart and facing forward. Upward Phase: Exhale and slowly lift your heels off the floor keeping your knees extended and without rotating your feet. Downward Phase: Inhale and slowly lower your heels back towards the floor.'
          },
          {
            name:'Abdominal crunches',
            amount: '12 reps',
            done: true,
            info: 'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale. Exhale and lift your upper body, keeping your head and neck relaxed Inhale and return to the starting position.'
          },
          {
            name:'Wide arm push ups',
            amount: '8 reps',
            done: true,
            info: "Keep your shoulders, spine, and hips in a straight line.Lengthen your spine to keep your back straight. Make sure your hips don't sag down or point upward. Look at a spot on the floor ahead of you as you keep your neck neutral. Engage your core and gluteal muscles when you do the exercise."
          },
          {
            name:'Butt Bridge',
            amount: '6 reps',
            done: true,
            info: 'Lie face up on the floor, with your knees bent and feet flat on the ground. Keep your arms at your side with your palms down. Lift your hips off the ground until your knees, hips and shoulders form a straight line. Hold your bridged position for a couple of seconds before easing back down'
          },
          {
            name:'Rest',
            amount: '30 secs',
            done: true,
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