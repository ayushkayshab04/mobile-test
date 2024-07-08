
export const eventData = [
    {
      title:'Watch Party',
      organiser:'Olivia Adams',
      ticketsLeft:'78/100 tickets left',
      invited:'100+ invited',
      time:'5:00 PM-10:00 PM',
      day:'Monday, Nov 13 2023',
      about:"Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!,",
      rate:'$10.00 - $50.00',
      location:'CP New Delhi, India ',
      image:require('../assets/images/Event.png')
    },
    { 
      title:'Candle March',
      organiser:'Olivia Adams',
      time:'5:00 PM-10:00 PM',
      ticketsLeft:'78/100 tickets left',
      invited:'100+ invited',
      day:'Monday, Nov 13 2023',
      about:"Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!",
      rate:'$10.00 - $50.00',
      location:'CP New Delhi, India ',
      image:require('../assets/images/Event.png')
    },
    {
      title:'Marathon',
      organiser:'Olivia Adams',
      time:'5:00 PM-10:00 PM',
      ticketsLeft:'78/100 tickets left',
      invited:'100+ invited',
      day:'Monday, Nov 13 2023',
      about:"Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!",
      rate:'$10.00 - $50.00',
      location:'CP New Delhi, India ',
      image:require('../assets/images/Event.png')
    },
    {
      title:'Meet and Greet',
      organiser:'Olivia Adams',
      time:'5:00 PM-10:00 PM',
      ticketsLeft:'78/100 tickets left',
      invited:'100+ invited',
      day:'Monday, Nov 13 2023',
      about:"Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!",
      rate:'$10.00 - $50.00',
      location:'CP New Delhi, India ',
      image:require('../assets/images/Event.png')
    },
    {
      title:'Birthday Party',
      organiser:'Olivia Adams',
      time:'5:00 PM-10:00 PM',
      ticketsLeft:'78/100 tickets left',
      invited:'100+ invited',
      day:'Monday, Nov 13 2023',
      about:"Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!",
      rate:'$10.00 - $50.00',
      location:'CP New Delhi, India ',
      image:require('../assets/images/Event.png')
    },
  ]



  export const Questionnarie = [
    {
     question:'Company/Organization:',
      type:'input',
      next:false,
      placeholder:'Write your answer here',

    },
    {
      question:'Job Title:',
      type:'input',
      next:false, 
      placeholder:'Write your answer here',
     },
     {
      question:'Are you a current student?:', 
      type:'option',
      next:true,
      options:['Yes','No']
     },
     {
      question:'Where did you hear about this event?:',
      type:'option',
      next:false,
      options:['LinkedIn','Instagram','Twitter','Facebook'] 
     },
  ]