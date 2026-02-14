---
title: "SWE Intern @ Healthlytics"
description: "HealthlyticsAI by iQonsulting"
group: "Healthlytics"
date: 2025-10-22
tags: ["coop", "swe", "ai"]
---

## intro to healthlytics

healthlytics is a starup owned by iqonsulting, they aim to use ai for different applications within the medical field; they work specifically in the first point of contact between patients and medical staff; one of the many r&d (research & development) areas in healthlytics is avatars; the idea is to create an interface for patients to interact with avatars of doctors they'll eventually visit and have these avatars ask basic questions like info abt their history (sickness-wise) and all the typical questions that are open-endedly asked in these contexts before meeting up physically; they also work in r&d for taking the patients' response and summarizing it without losing meaning for doctors to evaluate or for walking down a questioning tree too.

let me give u an example to maybe help u understand this better, assume we have a doctor called ayush (not me tho, medicine ain't for me). so dr. ayush has appointments with 10 patients in 8 hours; it takes him 1 hour per patient, now how can bro do 10 patients? he'll need 10 hours right? here's where healthlytics r&d comes; out of the 1 hour per patient, dr. ayush spends 10 minutes asking them the same set of questions, since he's a general physician (or something specific), these questions are exactly the same for everyone, and depending on the answer, he asks a different question but the question itself is ALWAYS the same, only depends on the decision made (mostly binary) per question for this 10 minute session.

so here's what we do to help dr. ayush: we clone him, and get his ai clone (r&d in making this clone) to ask the patients these basic questions, the patients literally talk to the clone and the clone feels legit, the clone understands what the patient said (r&d in parsing user voice input), can summarize it and can then ask the next set of questions depending on the answers; this is exactly how dr. ayush would do his asking but we're just replacing that so that dr. ayush has better efficiency; also, before seeing the patient, we give dr. ayush summaries of these conversations and then he can judge where to take things next and only take 30 mins or so per patient.

also, IMPORTANT POINT, the patient CONSENTS to this process and can choose to not go forward with it and do this questioning part physically as well (but if u actually explain how this is in the patient's benefit, how there's data privacy and so forth, it makes a lot more sense for them too and they tend to try it out anyway from my experience).

if u still don't get what this company does or what the avatar research group specializes in then idk man, check out their website or sth or reach out to me and we can go out for some milk and i'll explain ;)

## what i did

so as i only introduced the avatar research part in my intro, it kinda makes it obvious that i worked for that research group, duh.

so look, i talked to my supervisor abt this, i don't think i can share literally anything here lol, there's wayyyy to many privacy concerns in the health sector so i'll just give u tech stack and how we approached each of the elements and yeah that's it, then i'll prolly write some other posts explaining some specific coding-related things, but that's for later.

## making the avatar
for making the avatar we used echomimic (also for tts) tts is text-to-speech, basically input some text and get it in speech. 

also all of this was made using something called one-shot cloning so we'd get the doctor to say a sentence and then based on him saying that sentence, get a full copy of his voice.

we'd also then take a picture of the doctor's face and use that as reference for echomimic.

ok no more info, if u want more info reach out to me i'll be specific but prolly still won't be able to tell u all of what i did so MIC DROP.

## getting user input
simple stt (speech to text), many extremely good ai models out there especially with how nowadays our hardcore extreme level LLMs want to go toward taking voice inputs so its super easy to api toward them or from them.

there were some times where it would misinterpret what was being said so we could also prompt those into another LLMs and query it to make corrections after giving it some context that we got from the doctors.

this way we'd get a proper input that was (relatively) cleaned out and standardized to fully fit the use-case of the given doctors

## tree traversal
now its definitely not binary:

if i ask the patient a question like: A, there are probably 10 different ways they can respond and for each one I might not just jump to another question like B or C, i might have to do variants like A1, A2 etc. as well before deciding where to jump.

kinda wanted to do some matrix math here but i'll not reveal our exact framework, if ur into ai engineering then i think the most optimal guess u'd make is the one we went for, we only added some additional frameworks to mix things up a little to avoid data poisoning (THAT SUCKED OMG EVEN TYPING THAT MADE ME GO LIKE EEEEE)

## tree traveral 2.0
so in edge cases we default to a different genre of questioning all in all; like if i'm not sure abt an answer for let's say section A then i query the user once more for an input while simultaneously querying 3 other LLMs in the back for more input cleansing and diverting meaning; if the new query after iterated LLM querying still doesn't work then we go into traveral 2.0 and fail this questioning set

so to fail we essentially need 6 LLM queries to not work at all, 3 of which are iterative, kinda hard to fail but it happened a lot so we had to do a whole 2.0 model for these edge cases

i'm not telling u more lol go sleep gn bye bye, if this is interesting to u then BOY DO WE GOTTA MEET otherwise yeah makes sense

## summaries

this was a little difficult because some use-cases / doctors preferred a specific type of way in which their data would be displayed; this was mostly a front-end problem, but guess what, ur boy is a FULL-STACK so i had to do this too, was kinda boring and long so i got ai to vibe code it and then ran into problems with back-end then had to manually do it anyway, welp.

also i just realized i should clarify, summaries are a brief of the information we get after making the patient talk to the clone and get the clone to take and parse all the data, since the data is too much to just output all the text the patient said, we have to summarize it in some way that's meaningful for the doctor, direct summarizing via LLMs do work but its just that they either remove some super important content or are just not summaries that are good enough, so we had to step in lowkey all the time here just to help them, IMAGINE.

## use-cases
ok i pretty much gave u the entire model that is used in our r&d at healthlytics, its actually insane and i did so much work this internship that i didn't expect to do; the use case is genuinely super unique and i really love that part. 

there're far more applications in avatar than just first poc (point of contact) but just trying to do this one took me all the 4 months and it was fun.

## my advice for working startup
i mean its gonna be tough cuz u have no real guidelines and are expected to kinda do everything because if u don't do it then who will? so that's the sort of vibe that comes up from working in startups but its still super fun because this is what kinda forces u to go above and beyond and learn a lot. 

i think i learnt way too much these 4 months, now that i look back at it, i'm gonna drop my ai course in uoft cuz its become redundant, THAT'S HOW MUCH I LEARNT, so yeah if u have a startup as an opportunity to work for, try it but i'm not sure if i'd do it long term unless i know that its where i want to go up the career ladder in ;)


## why it matters

this internship was fully remote; i did A LOT of research and VERY LITTLE actual coding; that sounds a bit sad for a software engineer but i think that's why i was warned abt not being able to come up with a product or working prototypes by my supervisor before working here; i did manage to make things work but it was definitely interesting to do much more research than actual ci/cd code.

the reason this matters is that it goes to show u nuances; there are nuances associated with working in types of companies (i.e. startup vs smb vs giant vs bigtech etc.) and also in terms of the role (i.e r&d focuses, innovation focused, code focused, production focused etc.) so do ur research before comitting to working anywhere and see what it's like working in general; always consider asking previous friends abt how their experiences were and use that as leverage or as a point to get started with in making ur own decisions; also do what u think will work best for u, oftentimes that's actually what does, or just challenge urself like how i did; i was super comfortable with set expectations and a ticketing system but now having done this internship i feel relatively ready for experiences where i'll be learning more than doing ;)