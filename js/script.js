$("#menu").click(function(){
  $("#mynavbar").slideToggle(500);
})
function menu(){
  document.getElementById('menu').classList.toggle('change')

}

// $(window).on('scroll', function(){
//   if($(window).scrollTop()){
//     $('.header').addClass('scl');
//     $('.colr').addClass('chnagecolor');

//   }
//   else{
//     $('.header').removeClass('scl');
//     $('.colr').removeClass('chnagecolor');

//   }
// })


var controller = new ScrollMagic.Controller();



var tlTimeline1 = new TimelineMax();
tlTimeline1

.set('.text-center', {y:'5%'})
.to('.text-center',0.5 , {autoAlpha:0, y:'-5%'}, '-=0.1')
.to('.lap1', 0.01,  {autoAlpha:0} ,'-=0.5')
.from('.lap2', 0.01,  {autoAlpha:0},'-=0.5')
.from('.lap3', 0.01, {autoAlpha:0},'-=0.5')
.from('.lap4', 0.01, {autoAlpha:0},'-=0.5')
.from('.lap5', 0.01, {autoAlpha:0},'-=0.5')
.from('.lap6', 0.01, {autoAlpha:0})
.from('.lap7', 0.01, {autoAlpha:0})
.from('.lap8', 0.01, {autoAlpha:0})
.from('.lap9', 0.01, {autoAlpha:0})
.from('.lap10', 0.01, {autoAlpha:0})
.from('.lap11', 0.01,  {autoAlpha:0})
.from('.lap12', 0.01,  {autoAlpha:0})
.from('.lap13', 0.01, {autoAlpha:0})
.from('.lap14', 0.01, {autoAlpha:0})
.from('.lap15', 0.01, {autoAlpha:0})
.from('.lap16', 0.01, {autoAlpha:0})
.from('.lap17', 0.01, {autoAlpha:0})
.from('.lap18', 0.01, {autoAlpha:0})
.from('.lap19', 0.01, {autoAlpha:0})
.from('.lap20', 0.01, {autoAlpha:0})
.from('.lap21', 0.01,  {autoAlpha:0})
.from('.lap22', 0.01,  {autoAlpha:0})
.from('.lap23', 0.01, {autoAlpha:0})
.from('.lap24', 0.01, {autoAlpha:0})
.from('.lap25', 0.01, {autoAlpha:0})
.from('.lap26', 0.01, {autoAlpha:0})
.from('.lap27', 0.01, {autoAlpha:0})
.from('.lap28', 0.01, {autoAlpha:0})
.from('.lap29', 0.01, {autoAlpha:0})
.from('.lap30', 0.01, {autoAlpha:0})
.from('.lap31', 0.01,  {autoAlpha:0})
.from('.lap32', 0.01,  {autoAlpha:0})
.from('.lap33', 0.01, {autoAlpha:0})
.from('.lap34', 0.01, {autoAlpha:0})
.from('.lap35', 0.01, {autoAlpha:0})
.from('.lap36', 0.01, {autoAlpha:0})
.from('.lap37', 0.01, {autoAlpha:0})
.from('.lap38', 0.01, {autoAlpha:0})
.from('.lap39', 0.01, {autoAlpha:0})
.from('.lap40', 0.01, {autoAlpha:0})
.from('.lap41', 0.01,  {autoAlpha:0})
.from('.lap42', 0.01,  {autoAlpha:0})
.from('.lap43', 0.01, {autoAlpha:0})
.from('.lap44', 0.01, {autoAlpha:0})
.from('.lap45', 0.01, {autoAlpha:0})
.from('.lap46', 0.01, {autoAlpha:0})
.from('.lap47', 0.01, {autoAlpha:0})
.from('.lap48', 0.01, {autoAlpha:0})
.from('.lap49', 0.01, {autoAlpha:0})
.from('.lap50', 0.01, {autoAlpha:0})
.from('.lap51', 0.01,  {autoAlpha:0})
.from('.lap52', 0.01,  {autoAlpha:0})
.from('.lap53', 0.01, {autoAlpha:0})
.from('.lap54', 0.01, {autoAlpha:0})
.from('.lap55', 0.01, {autoAlpha:0})
.from('.lap56', 0.01, {autoAlpha:0})
.from('.lap57', 0.01, {autoAlpha:0})
.from('.lap58', 0.01, {autoAlpha:0})
.from('.lap59', 0.01, {autoAlpha:0})
.from('.lap60', 0.01, {autoAlpha:0})
.from('.lap61', 0.01,  {autoAlpha:0})
.from('.lap62', 0.01,  {autoAlpha:0})
.from('.lap63', 0.01, {autoAlpha:0})
.from('.lap64', 0.01, {autoAlpha:0})
.from('.lap65', 0.01, {autoAlpha:0})
.from('.lap66', 0.01, {autoAlpha:0})
.from('.lap67', 0.01, {autoAlpha:0})
.from('.lap68', 0.01, {autoAlpha:0})
.from('.lap69', 0.01, {autoAlpha:0})
.from('.lap70', 0.01, {autoAlpha:0})
.from('.lap71', 0.01,  {autoAlpha:0})
.from('.lap72', 0.01,  {autoAlpha:0})
.from('.lap73', 0.01, {autoAlpha:0})
.from('.lap74', 0.01, {autoAlpha:0})
.from('.lap75', 0.01, {autoAlpha:0})
.from('.lap76', 0.01, {autoAlpha:0})
.from('.lap77', 0.01, {autoAlpha:0})
.from('.lap78', 0.01, {autoAlpha:0})
.from('.lap79', 0.01, {autoAlpha:0})
.from('.lap80', 0.01, {autoAlpha:0})
.from('.lap81', 0.01,  {autoAlpha:0})
.from('.lap82', 0.01,  {autoAlpha:0})
.from('.lap83', 0.01, {autoAlpha:0})
.from('.lap84', 0.01, {autoAlpha:0})
.from('.lap85', 0.01, {autoAlpha:0})
.from('.lap86', 0.01, {autoAlpha:0})
.from('.lap87', 0.01, {autoAlpha:0})
.from('.lap88', 0.01, {autoAlpha:0})
.from('.lap89', 0.01, {autoAlpha:0})
.from('.lap90', 0.01, {autoAlpha:0})
.from('.lap91', 0.01,  {autoAlpha:0})
.from('.lap92', 0.01,  {autoAlpha:0})
.from('.lap93', 0.01, {autoAlpha:0})
.from('.lap94', 0.01, {autoAlpha:0})
.from('.lap95', 0.01, {autoAlpha:0})
.from('.lap96', 0.01, {autoAlpha:0})
.from('.lap97', 0.01, {autoAlpha:0})
.from('.lap98', 0.01, {autoAlpha:0})
.from('.lap99', 0.01, {autoAlpha:0})
.from('.lap100',0.01, {autoAlpha:0})
.from('.lap101',0.01, {autoAlpha:0})
.from('.lap102',0.01, {autoAlpha:0})
.from('.lap103', 0.01, {autoAlpha:0})
.from('.lap104', 0.01, {autoAlpha:0})
.from('.lap105', 0.01, {autoAlpha:0})
.from('.lap106', 0.01, {autoAlpha:0})
.from('.lap107', 0.01, {autoAlpha:0})
.from('.lap108', 0.01, {autoAlpha:0})
.from('.lap109', 0.01, {autoAlpha:0})
.from('.lap111', 0.01, {autoAlpha:0})
.from('.lap110', 0.01, {autoAlpha:0})



var scene = new ScrollMagic.Scene({
  triggerElement: 'triggerone',
  triggerHook: '0',
  durtion: '100%',
  offset: '10',
  reverse:'true'
 
})

.setTween(tlTimeline1)
.setPin('triggerone')
// .addIndicators()
.addTo(controller);

