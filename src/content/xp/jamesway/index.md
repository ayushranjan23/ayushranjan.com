---
title: "Software Engineer Co-Op"
description: "Jamesway ChickMaster Incubator Inc."
group: "jamesway"
date: 2025-10-22
tags: ["coop", "swe", "ai"]
---

## intro to jamesway

i remember during my interview, my supervisor literally told me "you can do school projects if you want to during work"; i didn't really understand why he said that until the first day of real work when i stepped into office and it sunk in that jamesway isn't a software company; they manufacture incubators to hatch chickens; definitely a dream for a mechanical engineer, not software; umm, oops, i guess; but ya know what, i had a blast at jamesway and i did so much work, much more than i did in any previous coop and it was software too hehe.

## why it matters

so i'll tell you another story, selecting hardware over software (trust me, i'm into software); so in 2nd year of university (UofT), computer engineering students get the chance to select between a hardware and software course, we can choose one over the other and do that for a whole semester; why you ask? because UofT wanted to show us both experiences so we can make a hollistic decision; ok basically my major is electrical and computer engineering (ece) but i only care about the computer side, so UofT is like why not try an actual (non introductory) electrical course in pcb design and see if u might like it? and i was like sure buddy lets do it, no actually, i did it.

the only reason i took that hardware course was because i was like might as well man, and its what landed me the jamesway co-op.

i want you to take away 2 things from this, or more lol who's stopping u. 1, try new things, even tho sometimes u really don't want to, just try, like what's the worst that'll happen, u fail? then try again lol hehe and don't care abt what the mean people say; if u like something, do it, cuz if someone rlly cares for u then they won't be mean they'll actually give u real reasons and u'll get the chance to love/learn from them. 2, think deeper than the surface level, i think if u told me the job description at jamesway 2 years ago i would've never worked there because there was no software scope; but now, i'm gonna take that description and dissect it like a surgeon, because there's opportunity everywhere, no really, i mean this, think deeper and make personal connections, it works.

## what i did

oh boy let's get started. so this was a 4 month coop, i'll break it down into fortnights (fortnite)s so we'll have 8 instances of 2 weeks each:

## f1: reading manuals, factory tours
this was the intro and it was where i met rene, a super smart guy from UW (university of waterloo) with 25+ years of xp at jamesway as a... software engineer, yay; the main thing i did this fortnite was read 200 page manuals to actually understand whats going on in our weekly meetings and for when people randomly assign me drawings (dwg)s that have vents i've never seen in my life, it was a lot of fun tracing those dwgs to the manuals. it was a fun fortnite, i got a free lunch because of helping load some eggs for a photoshoot so that was super fun and i also met another coop student while i was doing that; i got to walk around the entire plant, boy was it big, and also meet jose, another super smart electrical engineer; i told jose that i'm doing ece and took that hardware course and it seemed as tho i'll get to work with him too, yayyyy! last thing, i went to the second floor in our office and met the HVAC people, they had some PLC work for me so i was super happy because i met a software guy, had electrical/firmware work at hand, and also mechanical on the side

## f2: programming plcs, meeting poeple
so remember how we talked about meeting people and going out of your way in the intro (if u read it), i got this advice from my brother, who i look up to alot, he told me to greet everyone everyday; i felt like thats a little overkill, meeting every single person every single day is a lot, in hindsight tho, i would tell myself that too, boom; also its not extreme, its not like going to every single person at the office everyday and asking them things like "what are u doing? ey?" nah, its like "hey, good morning." THAT'S IT, cuz u see what happens is u kinda gotta break the ice and depending on their personality they might just come over and start talking more, it happened so many times and was so cool and unexpected sometimes, I would literally shake rene's hand everyday cuz we were buddies like that but with another employee i'd just wave and say hello, see, that's what I mean, start small, just greet, the connections will follow easily.

ok i didn't only greet people that'd be interesting for 2 weeks worth of time lol; i got my first assignment, to program some logic in C for a water valve plc; wait wait, we said at the start that this role will be mechanical predominantly right, SO WHAT THE HECK? that's the point my guy, be open to people and they'll trust u in the blink of an eye, so I did that and it was funnnn :) i learnt ladder logic too, its easy trust me i'm just having the time of my life.

## f3: ai is everywhere u want it to be
ok look, i love deep learning, ik its super cliche at this point and everyone and their cat uses ai everyday but i actually like it; there might be something else u like, all u gotta do is just find it :) and don't be sad if things change and u start liking something else (or someone else), its ok :)

so now that u know i like deep learning, i definitely had to use it somewhere; foreshadowing? yes, yes foreshadowing. i got an assignment that involved making measurements for eggflats; what are eggflats? umm, bro its just the thing that we put the eggs on and then put it in the incubator, yeah ok; so now I had to measure these things and i got to meet tim, a qa guy, qa means quality assurance, his job is to basically make sure that once the things we ship to u get to u, they don't break and kill u or ur chicks (chicken eggs).

tim gave me some things to measure with and i was like yay ok ez work just take the ruler or whatever and put it across the flat and measure it. NO, NO ITS NOT THAT EZ, i had to measure DEFLECTION in the flat after we put eggs on it because some parts deflected more than others and this influenced automation; oh, that's what i had to do... that.

tim had a full outline for me for measuring before and after deflection and with pressure involved as well; pressure because if u put a vernier height gauge on an object and u push too hard, that pushing can make micron differences and that's a no no; in short, we were super super accurate.

i did something crazy, i took a dslr i had lying around at home and programmed this PyTorch model that could measure with sub-micron accuracy; then i showed it to tim and he was like "yeah nah this ain't working" and once he was free we went and tested it and it was more accurate that the height gauge. flex? nah i don't think this was a flex cuz i wouldn't have been able to do it without annoying tim to the point where he was like bro just measure, lol.

my VP (vice president, engineering) loved it; he was pretty impressed with using deep learning and we had a call for an hour where i was yapping and explaining how it all worked at a higher level; also learnt something super important here which we'll talk about eventually: [talk to people at a level where they are, not where you are]. remember that ;)


## f4: courses get u started, interest keeps u going
remember how i told you that i took a hardware course as opposed to a software one when i had the choice? let's talk about it. so the course codes i had choices for were UofT ECE295 and UofT ECE297, i took 295 which is a pcb design course; now keep in mind that the liberty to make a decision between these courses was rather erratic over the years, at least from my knowledge; thus i'm not really sure if people who are planning to pursue my path at uoft will come across the same decision. welp. anyway, i got started with a hardware course this way, even though it wasn't necessarily where the future of my career was planning to head toward ;)

rene designed pcbs for jamesway incubators singlehandedly. its kinda crazy because he's the only engineer in the company with 25+ years of experience and also the only software and hardware engineer (combined); the amount of knowledge he's accumalated is genuinely outstanding in my humble opinion; one day, he took me to his lab; i was trotting around aimlessly looking for stuff to question him on since i love doing that; he then pulled out a treasure filled with dozens of books detailing the aspects of programming and engineering techniques; there it was, THERE IT WAS.

i spent pretty much the entire co-op (i'm writing this after the entire thing) picking new books and exploring them; it was so much fun because i could ask rene anything and he had answers so i was just absorbing things like a sponge; i asked rene a variety of questions from pcb design choices to what this programming book does.

one funny moment i recall was my interaction with rene during a fire drill and we spent half an hour talking about if he'd caused anything to go up in flames; we explored his lab after that and talk about fire hazards and the experience in itself was just amazing, to say the least

one thing i wanted to point out from this experience is that the real force which pushes people forward is an interest and will to do something; i understand where people come from when they ask me about university or online courses to complete and gain experience from; but i think that just having the passion and spending some time with people who have the knowledge is far more valuable because u don't have to make the same mistakes they made and they sort of sculpt a path entirely for u, at least in my opinion.


## f5: coding another plc (e2e), the solids work
oh yesss, more coding

you know its funny, like i thought this role will have no coding and i couldn't be more wrong, i'm now a software engineer co-op, hehehe;

so jose comes up to me this fine morning, i'm working for him under the hood anyway doing some parts' testing from vendors for him, i can type loads about that but i feel like this next story is more valuable ;) he tells me that he wants to show me something called "early feeding" and discuss how i can help in its process, so i'll explain early feeding (ef) to u real quick

typically, the eggs are put in the incubator, the eggs hatch, we remove the chicks (baby chickens, not um ... anyway) and then give them to the farm or medical facility or whoever wants baby chickens; this is the typical and normal process; ef is just adding one more thing before the handover stage (giving them to the farm... stage), we make the chicks fat; i'm not joking i'm serious, we make them fat, by feeding them.

ok how do u feed them, manually? by hand? nah bro we're engineers so what we do is we have a system that pumps their food to them (this is mechanical stuff so not my expertise) and then we have an LED that lights up at a given point of time to attract the chicks to the feeding area (ya i coded that, they trusted me w/ it omg).

i mean i can definitely take u through the code and all the problems i ran through but we have other posts just for that and this is high level so all i wanna tell u is that i did this end-to-end, like literally from identifying the plc, making decisions for which is best, talking with jose abt his previous decisions, reading loads of manuals and even blowing a fuse (rene gave me another one but i got so scared i actually blew it and almost broke a display, welp); also, wanna know something? none of this would've happened if i didn't greet jose the first time i came to office and didn't tell him that i'm doing ece and want to do coding in any related field, let that sink in, let ur sponge (brain) absorb that fluid (knowledge).

ok so i'll also talk a little abt solidworks here, i did a lot of solidworks and autocad electrical and autocad generally too, but to be honest, these were more of background tasks that just kept going throughout within the 4 months as i was doing even more difficult programming assignments at the forefront; i'll therefore neatly tuck this in here: i made a 3d-printed part, a stand to help move one of our machines to rene's lab, made 5 dwg sets on autoCAD, made 3 dwg sets on solidworks, and i did a lot of other small things as well, these ones i listed above were all by myself but the other things i did were mostly helping the engineers when they had work which was easy enough for their cat to do so i did that and also coded at the same time, meow meow. 

## f6: rag use-case, building muscle
okkkk, let's talk about a time that i was in our huge plant. i wanted to give this section its own chapter just to show u that not everything is sunshine & rainbows but u can make the best out of what u have. 

i was assigned labor.

yeah.

i was.

i had to move crates around, put in some stamps on metal sheets, move sample eggs around and alot of other stuff.

ok, good, now here's where the lesson comes.

i met sorin here, sorin's a manufacturing engineer, he's fairly senior so i was thinking of ways to break the ice; he's romanian and i love learning languages so boom i learnt how to say a few basic phrases in romanian and that's it we were buddies in a day.

here's the fun part now, since sorin is senior manufacturing, he needs help with IT or computer-based things, he was also assigned to work with the 3D printer at jcmi, hehe, see where this is going? we became buddies in debugging 3D printer issues and i was basically his tech support on call. 

guess what happened next, the printer broke completely and we had to call the manufacturers (of the printer) to fix it, and... i was in charge.

and then... sorin comes up to me in a week and says, we're gonna go drive to Toronto and attend this conference, i want u to come, i talked to VP, he's fine with it.

did u expect that ending? from labor to getting to represent jcmi and network too? i had so much fun in the event and i'm still in touch with some people from there, bro its crazy how just a small amount of networking can literally take u places and just being positive when things don't necessarily work out (in ur opinion) changes things so quickly!

also i just realized that i wanted to write abt the rag use-case here so i'll explain it very quickly: we've got huge manuals, like thousands of pages i'm not kidding i read them myself i can verify, thousands of pages, there are trends but its still a lot of content; simple solution, make a rag chatbot that's like ai on steroids and the steroids are these documents; done this before for another company so i was like i'm gonna do it here too and its gonna work. bro it didn't, well kinda, let's talk abt it next.

## f7: my rag chatbot actually worked
rag took some time and now worked, got to talk with IT people and got attention of the big guys

## f8: my external meeting w/ cfo/coo
board meeting with the big guys making an impact, having fun, final remarks, go sleep goodnight
