
var count=1;

function end(){
	    $('#pause').hide();
$('#plays').show();
	if(count!=15){
document.getElementById("videocol").style.display="none";
document.getElementById("videocol2").style.display="block";
document.getElementById("qnum").innerHTML="1/2";
	}
}


function next(){
	
document.getElementById("disablebutton").disabled=false;
									document.getElementById("disablebutton").style.background="#fff";
									document.getElementById("qnum").innerHTML="2/2";
								document.getElementById("disablebutton").style.color="#30347D";
										
									
								
										document.getElementById("enablebutton").style.display="none";
									document.getElementById("sumbitbutton").style.display="inline";
								
		document.getElementById("qstn1").innerHTML="Your child has secured an A+ in Painting while an F in Math. What is our brain most likely to tell us todo?";
		
		document.getElementById("ans1").innerHTML=" Tell us to praise the kid for getting A+ in Painting";
				document.getElementById("ans2").innerHTML="Tell us to praise the kid for getting A+ in Painting and scold him/her for securing an F in Math";
						document.getElementById("ans3").innerHTML="Tell us to encourage him/her to focus on painting while trying to improve in Math";
								document.getElementById("ans4").innerHTML="Tell us to scold him/her for securing an F in Math with no appreciation for the A in Painting";
								
							
								
										
									if(count==2){
		document.getElementById("qstn1").innerHTML="Imagine that your child is melancholic all the time. What would you do to change his/her general nature?";
				document.getElementById("ans1").innerHTML="Try to cheer him/her up all the time";
						document.getElementById("ans2").innerHTML="Tell him/her to look at the bright side of life";
							document.getElementById("ans4").innerHTML="Let him/her be the way he/she is";
								document.getElementById("ans3").innerHTML="Set an example by doing little good deeds yourself and showing the child that littleexperiences bring you immense inner happiness";
		document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
									}		





					if(count==3){

						document.getElementById("qstn1").innerHTML="Your child returns from school and shares that he/she has been bullied and doesn’t want to go back tomorrow. What would you do to comfort him/her?";
		
		document.getElementById("ans2").innerHTML="Yell at your child and tell him/her to face challenges";
				document.getElementById("ans1").innerHTML="Tell him/her to fight with the bullies";
						document.getElementById("ans3").innerHTML="Try to tell him/her to be nice to the bullies and at bedtime tell her about how your best-friendship started with an argument";
								document.getElementById("ans4").innerHTML="Tell him/her that you will raise a complaint against them with the teacher";
											}		





					if(count==4){

						document.getElementById("qstn1").innerHTML="Your child has not completed a homework and doesn’t want to go to school for the fear of being scolded. What should you do?";
		
		document.getElementById("ans1").innerHTML="Do the homework yourself to avoid him/her from being scolded";
				document.getElementById("ans2").innerHTML="Scold them yourself and then send them to school";
						document.getElementById("ans3").innerHTML="Let them skip school";
								document.getElementById("ans4").innerHTML="Encourage them to attend school and tell them that being scolded by your teachers isn’t a bad thing as they are just trying to make you learn but also tell them to take on responsibilities and complete homework on their own";
											}	



	if(count==5){

						document.getElementById("qstn1").innerHTML="As a parent, which of school would you want your child to be in?";
		
		document.getElementById("ans1").innerHTML="A school where discipline is the law";
				document.getElementById("ans2").innerHTML="A school where tests are taken every week";
							document.getElementById("ans3").innerHTML="Let them skip school";
								document.getElementById("ans4").innerHTML="A school where more importance is given to academics than sports, music or any other co-curricular activities";
										}	


	if(count==6){

						document.getElementById("qstn1").innerHTML="Your child wants to join art classes but you don’t know anything about art. What should you do?";
		
		document.getElementById("ans1").innerHTML="Let him/her be their self and join the classes they enjoy";
				document.getElementById("ans2").innerHTML="Tell them to wait while you learn about art classes and then allow them to join";
							document.getElementById("ans3").innerHTML="Say a blunt NO";
								document.getElementById("ans4").innerHTML="Make excuses and then tell them not to join";
										}	

	if(count==7){

						document.getElementById("qstn1").innerHTML="You see an old lady waiting to cross the street. You help her, even though you were late for a meeting and needed to hurry. How does that make you feel? ";
		
		document.getElementById("ans1").innerHTML="Hedonic";
				document.getElementById("ans2").innerHTML="Eudemonic";
							document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
										document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
										}		


	if(count==8){

						document.getElementById("qstn1").innerHTML="Imagine you get a job offer that pays less but is fulfilling; something that you wanted to do all your life. What do you think you should do given there is someone who can run the family? ";
		
		document.getElementById("ans1").innerHTML="Take the job because when your work is rewarding you feel Eudemonic";
				document.getElementById("ans2").innerHTML="We work for money so do not settle for a low paying job";
							document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
										document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
										}	


	if(count==9){

						document.getElementById("qstn1").innerHTML="What is most likely to happen when are a part of a super fulfilling event where you feel good and content about yourself?";
		
		document.getElementById("ans1").innerHTML="You feel good, that’s it";
				document.getElementById("ans2").innerHTML="You reward yourself with something materialistic";
							document.getElementById("ans3").innerHTML="Your neurons fire and wire together helping your brain to turn you into a better person than what you were yesterday";
								document.getElementById("ans4").innerHTML="";
										document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="none";
										}			



	if(count==10){

						document.getElementById("qstn1").innerHTML="Your child plays lots of video games and games on your phone. He/she doesn’t listen when you tell them to stop. What is the best way out?";
		
		document.getElementById("ans1").innerHTML="There is actually no way out once they are addicted to games";
				document.getElementById("ans2").innerHTML="Work on making them shift their preference for games to reading or painting or whatever activity suits them";
							document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
										document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
										}		




	if(count==11){

						document.getElementById("qstn1").innerHTML="Imagine everyone says your child is ordinary with no special talent. He feeds birds early in the morning, goes to school, comes back home and leads a very average life as compared to kids who attend extra-curricular classes and do well in studies. Ask yourself if you are a proud parent.";
		
		document.getElementById("ans1").innerHTML="";
				document.getElementById("ans2").innerHTML="";
							document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
										document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
												document.getElementById("radio1").style.display="none";
											document.getElementById("radio2").style.display="none";
										}											
											


	if(count==12){

						document.getElementById("qstn1").innerHTML="What can we do to transcend to a mode of just being and not doing anything?";
		
		document.getElementById("ans1").innerHTML="";
				document.getElementById("ans2").innerHTML=" ";
							document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
										document.getElementById("radio1").style.display="none";
											document.getElementById("radio2").style.display="none";
												document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
										}	




	if(count==13){

						document.getElementById("qstn1").innerHTML="You pick up an argument with your partner in front of your child. Once things settle down, what do you think you should do?";
		
		document.getElementById("ans1").innerHTML="";
				document.getElementById("ans2").innerHTML="";
							document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
										document.getElementById("radio1").style.display="none";
											document.getElementById("radio2").style.display="none";
												document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
										}											
}



function back(){
	
								
								document.getElementById("disablebutton").disabled=true;
									document.getElementById("disablebutton").style.background="#414141";
										document.getElementById("disablebutton").style.color="#A7A7A7";
		
										
										
										document.getElementById("enablebutton").style.display="inline";
									document.getElementById("sumbitbutton").style.display="none";
									

									if(count==1){
document.getElementById("qnum").innerHTML="1/2";

	document.getElementById("qstn1").innerHTML="Our brain attracts (or acts as velcro for) what kind of news?";
		
		document.getElementById("ans1").innerHTML="Good News";
				document.getElementById("ans2").innerHTML="Bad News";
						document.getElementById("ans3").innerHTML="	Neutral News";
								document.getElementById("ans4").innerHTML="	Both Bad and Good news";
									}
									
											if(count==2){
																document.getElementById("qstn1").innerHTML="We can train our mind in a way so that it can change our brain";
		
		document.getElementById("ans2").innerHTML="False. Brains and Minds are the same.";
				document.getElementById("ans1").innerHTML="True. When our minds take in the good in everything our brains start to hold only positive thoughts and gives us inner happiness and peace";
						document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
									document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
											}
											
					if(count==3){
		document.getElementById("dir").style.width="20%";
						document.getElementById("qstn1").innerHTML="Neuroplastic changes stop at what age?";
		
		document.getElementById("ans2").innerHTML="After 18";
				document.getElementById("ans1").innerHTML="After 12";
						document.getElementById("ans3").innerHTML="It varies from one person to another";
								document.getElementById("ans4").innerHTML="It never stops but slows down gradually";
											}		

										
					if(count==4){
		document.getElementById("dir").style.width="20%";
				document.getElementById("qstn1").innerHTML="What is the best way to face a challenge or a negative situation?";
		
		document.getElementById("ans1").innerHTML="Run away from it";
				document.getElementById("ans2").innerHTML="Avoid it";
						document.getElementById("ans3").innerHTML="Face it with all your inner resources to help you remain resilient";
								document.getElementById("ans4").innerHTML="Let time solve the problem";
											}													
											
											
												if(count==5){
		document.getElementById("dir").style.width="20%";
						document.getElementById("qstn1").innerHTML=": How can we focus on essential socio-emotional development in young students?";
		
		document.getElementById("ans1").innerHTML="By making them memorize lessons";
				document.getElementById("ans2").innerHTML="By inculcating life values and sharing real-life experiences";
						document.getElementById("ans3").innerHTML="By taking more standardized tests";
								document.getElementById("ans4").innerHTML="By making them read more books";
											}													
											
											
								
												if(count==6){
		document.getElementById("dir").style.width="20%";
		
				document.getElementById("qstn1").innerHTML="Why do you think Rick tells us not to speak or act out of anger?";
		
		document.getElementById("ans1").innerHTML="Anger has a deep impact and anything said or done out of anger can have long-lasting effects on young minds";
				document.getElementById("ans2").innerHTML="Being angry harms our health";
						document.getElementById("ans3").innerHTML="Our children will not listen to us if we shout at them or punish them";
								document.getElementById("ans4").innerHTML="Anger doesn’t help correct children’s problems";
			
		
											}													
												

				if(count==7){
		document.getElementById("dir").style.width="20%";
		
				document.getElementById("qstn1").innerHTML="Why do you think Rick tells us not to speak or act out of anger?";
								document.getElementById("qstn1").innerHTML="Which of the following will offer you a Eudemonic feeling?";
		
		document.getElementById("ans1").innerHTML="Travelling to a zoo with your child";
				document.getElementById("ans2").innerHTML="Swimming with your child";
						document.getElementById("ans3").innerHTML="Having a pizza with your child";
								document.getElementById("ans4").innerHTML="Sharing your life-changing experiences with your child who is feeling down even when you have heaps of work pending";
			
			document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
			
		
											}														
											
				if(count==8){
		document.getElementById("dir").style.width="20%";
			document.getElementById("qstn1").innerHTML="What is the leading cause of depression?";
		
		document.getElementById("ans1").innerHTML="Loneliness";
				document.getElementById("ans2").innerHTML="Shredded connections";
						document.getElementById("ans3").innerHTML="Expectations to multitask";
								document.getElementById("ans4").innerHTML="All of these";
			
			document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
			
		
											}		

		if(count==9){
		document.getElementById("dir").style.width="20%";
			document.getElementById("qstn1").innerHTML="What is the leading cause of depression?";
		
			document.getElementById("qstn1").innerHTML="Our brains are more susceptible to negative neuroplasticity than positive neuroplasticity";
		
		document.getElementById("ans1").innerHTML="True";
				document.getElementById("ans2").innerHTML="False";
						document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
			
			document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
			
		
											}	



		if(count==10){
		document.getElementById("dir").style.width="20%";
						
		
						document.getElementById("qstn1").innerHTML="How can make our kids attentive?";
			document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
		document.getElementById("ans1").innerHTML="Yell at them when they don’t pay attention";
				document.getElementById("ans2").innerHTML="Make them a part of mindfulness training ";
						document.getElementById("ans3").innerHTML="Let them be on their own";
								document.getElementById("ans4").innerHTML=" If they are not naturally attentive they will never be";
			
		
											}	



	if(count==11){
		document.getElementById("dir").style.width="20%";
						
		
	document.getElementById("qstn1").innerHTML="Why is finding what’s sacred for your kid important?";
			document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
												document.getElementById("radio2").style.display="inline";
											document.getElementById("radio1").style.display="inline";
		document.getElementById("ans1").innerHTML="To help them perform well in exams";
				document.getElementById("ans2").innerHTML="To enable a purposeful being";
						document.getElementById("ans3").innerHTML="To help them become wealthy in future";
								document.getElementById("ans4").innerHTML="To make them excel in athletics";
		
											}		


	if(count==12){
	document.getElementById("dir").style.width="20%";
			document.getElementById("qstn1").innerHTML="Why do you think it is important to be able to view one situation from different perspectives?";
			document.getElementById("radio3").style.display="inline";
				document.getElementById("radio1").style.display="inline";
					document.getElementById("radio2").style.display="inline";
											document.getElementById("radio4").style.display="none";
		document.getElementById("ans1").innerHTML="To know that we are not always right";
				document.getElementById("ans2").innerHTML="To make better decisions in future";
						document.getElementById("ans3").innerHTML="To enable our kids to do the same and be compassionate and empathetic towards others who are different from us";
								document.getElementById("ans4").innerHTML="";											
}


	if(count==13){
	document.getElementById("dir").style.width="20%";
		document.getElementById("qstn1").innerHTML="What part of the brain is associated with day-dreaming?";
			document.getElementById("radio3").style.display="inline";
				document.getElementById("radio1").style.display="inline";
					document.getElementById("radio2").style.display="inline";
											document.getElementById("radio4").style.display="inline";
		document.getElementById("ans1").innerHTML="Rear part";
				document.getElementById("ans2").innerHTML="Front part";
						document.getElementById("ans3").innerHTML="Middle part";
								document.getElementById("ans4").innerHTML="All of the brain";
								
	}

}

function submit(){
	
	
		document.getElementById("videocol2").style.display="none";
			document.getElementById("sub").style.display="block";
			
		setTimeout(endsx, 2000)
}



function endsx(){
	count=count+1;

			document.getElementById("enablebutton").style.display="inline";
							document.getElementById("sumbitbutton").style.display="none";

	document.getElementById("disablebutton").disabled=true;
		document.getElementById("videocol2").style.display="none";
			document.getElementById("sub").style.display="none";
				
	document.getElementById("videocol").style.display="block";
	
	if(count==2){
	
			document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideo").src="assets/videos/Segment 2.mp4";
			alert('ddd');
		document.getElementById("one").className = "but";
		document.getElementById("two").className = "butactive";
document.getElementById("qnum").innerHTML="0/2";
			document.getElementById("duration").innerHTML="04:38 ";
				document.getElementById("segmentbutton").value="Segment 2";
					document.getElementById("qfont").innerHTML="Train the mind to train the brain to train the mind!";
					
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
	
						document.getElementById("qstn1").innerHTML="We can train our mind in a way so that it can change our brain";
		
		document.getElementById("ans2").innerHTML="False. Brains and Minds are the same.";
				document.getElementById("ans1").innerHTML="True. When our minds take in the good in everything our brains start to hold only positive thoughts and gives us inner happiness and peace";
						document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
									document.getElementById("radio3").style.display="none";
											document.getElementById("radio4").style.display="none";
								
	}
	
	
	
		if(count==3){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 3.mp4";
		document.getElementById("two").className = "but";
		document.getElementById("three").className = "butactive";
				document.getElementById("twos").className = "but";
		document.getElementById("threes").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 08:34 mins";
				document.getElementById("segment").innerHTML="Segment 3";
					document.getElementById("title").innerHTML="Introducing the “Brain-Mind” Concept to the children";
					
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
		
						document.getElementById("qstn1").innerHTML="Neuroplastic changes stop at what age?";
		
		document.getElementById("ans2").innerHTML="After 18";
				document.getElementById("ans1").innerHTML="After 12";
						document.getElementById("ans3").innerHTML="It varies from one person to another";
								document.getElementById("ans4").innerHTML="It never stops but slows down gradually";
			
								
	}
	
	
	
			if(count==4){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 4.mp4";
		document.getElementById("three").className = "but";
		document.getElementById("four").className = "butactive";
				document.getElementById("threes").className = "but";
		document.getElementById("fours").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 08:31 mins";
				document.getElementById("segment").innerHTML="Segment 4";
					document.getElementById("title").innerHTML="How to deal with suffering and usher in happiness amidst adversities";
					
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
		
						document.getElementById("qstn1").innerHTML="What is the best way to face a challenge or a negative situation?";
		
		document.getElementById("ans1").innerHTML="Run away from it";
				document.getElementById("ans2").innerHTML="Avoid it";
						document.getElementById("ans3").innerHTML="Face it with all your inner resources to help you remain resilient";
								document.getElementById("ans4").innerHTML="Let time solve the problem";
			
								
	}
	
	
		
			if(count==5){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 5.mp4";
		document.getElementById("four").className = "but";
		document.getElementById("five").className = "butactive";
				document.getElementById("fours").className = "but";
		document.getElementById("fives").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 03:52 mins";
				document.getElementById("segment").innerHTML="Segment 5";
					document.getElementById("title").innerHTML="Changes in current education system";
			
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
		
						document.getElementById("qstn1").innerHTML="How can we focus on essential socio-emotional development in young students?";
		
		document.getElementById("ans1").innerHTML="By making them memorize lessons";
				document.getElementById("ans2").innerHTML="By inculcating life values and sharing real-life experiences";
						document.getElementById("ans3").innerHTML="By taking more standardized tests";
								document.getElementById("ans4").innerHTML="By making them read more books";
			
								
	}
	
	
	
	
	
				if(count==6){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 6.mp4";
		document.getElementById("five").className = "but";
		document.getElementById("six").className = "butactive";
				document.getElementById("fives").className = "but";
		document.getElementById("sixs").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 03:31 mins";
				document.getElementById("segment").innerHTML="Segment 6";
					document.getElementById("title").innerHTML="Raising happier kids";
					
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
		
						document.getElementById("qstn1").innerHTML="Why do you think Rick tells us not to speak or act out of anger?";
		
		document.getElementById("ans1").innerHTML="Anger has a deep impact and anything said or done out of anger can have long-lasting effects on young minds";
				document.getElementById("ans2").innerHTML="Being angry harms our health";
						document.getElementById("ans3").innerHTML="Our children will not listen to us if we shout at them or punish them";
								document.getElementById("ans4").innerHTML="Anger doesn’t help correct children’s problems";
			
								
	}
	
	
	
	
	
			if(count==7){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 7.mp4";
		document.getElementById("six").className = "but";
		document.getElementById("seven").className = "butactive";
			document.getElementById("sixs").className = "but";
		document.getElementById("sevens").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 02:39 mins";
				document.getElementById("segment").innerHTML="Segment 7";
					document.getElementById("title").innerHTML="Knowing ‘Hedonic’ and ‘Eudemonic’- the two kinds of qualities of life";
		
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
		
						document.getElementById("qstn1").innerHTML="Which of the following will offer you a Eudemonic feeling?";
		
		document.getElementById("ans1").innerHTML="Travelling to a zoo with your child";
				document.getElementById("ans2").innerHTML="Swimming with your child";
						document.getElementById("ans3").innerHTML="Having a pizza with your child";
								document.getElementById("ans4").innerHTML="Sharing your life-changing experiences with your child who is feeling down even when you have heaps of work pending";
			
								
	}
	
	
	
		
			if(count==8){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 8.mp4";
		document.getElementById("seven").className = "but";
		document.getElementById("eight").className = "butactive";
		
				document.getElementById("sevens").className = "but";
		document.getElementById("eights").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 06:14 mins";
				document.getElementById("segment").innerHTML="Segment 8";
					document.getElementById("title").innerHTML=" Thoughts on Depression-the dreaded D-word ";
				
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
			
						document.getElementById("qstn1").innerHTML="What is the leading cause of depression?";
		
		document.getElementById("ans1").innerHTML="Loneliness";
				document.getElementById("ans2").innerHTML="Shredded connections";
						document.getElementById("ans3").innerHTML="Expectations to multitask";
								document.getElementById("ans4").innerHTML="All of these";
				document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
								
	}
	
	
	
	
	
				if(count==9){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 9.mp4";
		document.getElementById("eight").className = "but";
		document.getElementById("nine").className = "butactive";
				document.getElementById("eights").className = "but";
		document.getElementById("nines").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 05:08 mins";
				document.getElementById("segment").innerHTML="Segment 9";
					document.getElementById("title").innerHTML="What is positive neuroplasticity?";
			
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										

						document.getElementById("qstn1").innerHTML="Our brains are more susceptible to negative neuroplasticity than positive neuroplasticity";
		
		document.getElementById("ans1").innerHTML="True";
				document.getElementById("ans2").innerHTML="False ";
						document.getElementById("ans3").innerHTML="";
								document.getElementById("ans4").innerHTML="";
			
								
	}
	
	
	
	
			if(count==10){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 10.mp4";
		document.getElementById("nine").className = "but";
		document.getElementById("ten").className = "butactive";
				document.getElementById("nines").className = "but";
		document.getElementById("tens").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 07:01 mins";
				document.getElementById("segment").innerHTML="Segment 10";
					document.getElementById("title").innerHTML="Increasing the attention span";
	
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
	
						document.getElementById("qstn1").innerHTML="How can make our kids attentive?";
			document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
		document.getElementById("ans1").innerHTML="Yell at them when they don’t pay attention";
				document.getElementById("ans2").innerHTML="Make them a part of mindfulness training ";
						document.getElementById("ans3").innerHTML="Let them be on their own";
								document.getElementById("ans4").innerHTML=" If they are not naturally attentive they will never be";
			
								
	}
	
	
	
		if(count==11){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 11.mp4";
		document.getElementById("ten").className = "but";
		document.getElementById("eleven").className = "butactive";
				document.getElementById("tens").className = "but";
		document.getElementById("elevens").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 07:12 mins";
				document.getElementById("segment").innerHTML="Segment 11";
					document.getElementById("title").innerHTML="Finding what’s sacred and meaningful fo kids";
					
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
			
						document.getElementById("qstn1").innerHTML="Why is finding what’s sacred for your kid important?";
			document.getElementById("radio3").style.display="inline";
											document.getElementById("radio4").style.display="inline";
		document.getElementById("ans1").innerHTML="To help them perform well in exams";
				document.getElementById("ans2").innerHTML="To enable a purposeful being";
						document.getElementById("ans3").innerHTML="To help them become wealthy in future";
								document.getElementById("ans4").innerHTML="To make them excel in athletics";
			
								
	}
	
	
	
	
	
	
			if(count==12){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 12.mp4";
		document.getElementById("eleven").className = "but";
		document.getElementById("twelve").className = "butactive";
				document.getElementById("elevens").className = "but";
		document.getElementById("twelves").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 03:13 mins";
				document.getElementById("segment").innerHTML="Segment 12";
					document.getElementById("title").innerHTML="Why is looking at a situation from various perspectives important?";
			
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
		
						document.getElementById("qstn1").innerHTML="Why do you think it is important to be able to view one situation from different perspectives?";
			document.getElementById("radio3").style.display="inline";
				document.getElementById("radio1").style.display="inline";
					document.getElementById("radio2").style.display="inline";
											document.getElementById("radio4").style.display="none";
		document.getElementById("ans1").innerHTML="To know that we are not always right";
				document.getElementById("ans2").innerHTML="To make better decisions in future";
						document.getElementById("ans3").innerHTML="To enable our kids to do the same and be compassionate and empathetic towards others who are different from us";
								document.getElementById("ans4").innerHTML="";
			
								
	}
	
	
	
		
			if(count==13){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 13.mp4";
		document.getElementById("twelve").className = "but";
		document.getElementById("thirteen").className = "butactive";
				document.getElementById("twelves").className = "but";
		document.getElementById("thirteens").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 04:00 mins";
				document.getElementById("segment").innerHTML="Segment 13";
					document.getElementById("title").innerHTML="Understanding Doing and Being";
		
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
										document.getElementById("dir").innerHTML="Direct Questions";
										
			
						document.getElementById("qstn1").innerHTML="What part of the brain is associated with day-dreaming?";
			document.getElementById("radio3").style.display="inline";
				document.getElementById("radio1").style.display="inline";
					document.getElementById("radio2").style.display="inline";
											document.getElementById("radio4").style.display="inline";
		document.getElementById("ans1").innerHTML="Rear part";
				document.getElementById("ans2").innerHTML="Front part";
						document.getElementById("ans3").innerHTML="Middle part";
								document.getElementById("ans4").innerHTML="All of the brain";
			
								
	}
	
	
	
				if(count==14){
			
				document.getElementById("disablebutton").disabled=true;
			document.getElementById("disablebutton").style.background="#414141";
			document.getElementById("disablebutton").style.color="#A7A7A7";
		document.getElementById("myVideos").src="assets/videos/segment 14.mp4";
		document.getElementById("thirteen").className = "but";
		document.getElementById("fourteen").className = "butactive";
				document.getElementById("thirteens").className = "but";
		document.getElementById("fourteens").className = "butactive";
			document.getElementById("duration").innerHTML="Duration 03:28 mins";
				document.getElementById("segment").innerHTML="Segment 14";
					document.getElementById("title").innerHTML="Understanding Doing and Being";
						
						document.getElementById("enablebutton").style.display="inline";
									document.getElementById("submitbutton").style.display="none";
									
										
				
			
								
	}
	
	
	
	
	
}