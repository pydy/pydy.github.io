Google Summer of Code 2013 Organization Application
===================================================

Organization ID
---------------

pydy

Organization Name
-----------------

PyDy

Organization Description
------------------------

We are a group of engineering and physics graduate students who use Python to
study the motion of multi-body mechanical systems (planes, trains,
musculoskeletal, automobiles, robots, bicycles, etc.). Over the course of the
last 5 years we have developed (with the help of 5 GSoC projects) a Python
sub-package of the SymPy project, mechanics, which has been used in graduate
teaching at UC Davis, heavily used in two PhD theses, and has been written
about in a conference paper and a journal paper. We enjoy modeling the physical
world around us with the help of a computer and want to leverage open source
software development to create the next generation of multi-body dynamics
software tools.

The PyDy concept was birthed mostly from frustations that Dale Peterson and
Jason Moore had working with antiquated closed source software during the early
days of their graduate career. This is unfortunately a very typical issue with
enterprise software for engineering. The particular software in question was
taught as part of a course which introduces Kane's method for deriving
equations of motion. This software, Autolev, is very powerful at symbolic
dynamics but lacks important functionality to make it a useful and friendly
tool to use in a daily workflow. Jason and Dale dreamed of creating an open
source tool that was more extensible, but at the time neither of them had the
programming skills to make the dream a reality. Dale contacted the SymPy
project and along with some great mentorship from Ondřej Čertík at SymPy and a
GSoC grant led the effort to create the software of his dreams. The software
has since matured quite well having all of the basic desired features. The
project's next steps are to increase the code speed and efficiency and also to
develop end user graphical interfaces for model construction. Currently, 

Why is your organization applying to participate in Google Summer of Code 2013? What do you hope to gain by participating?
--------------------------------------------------------------------------------------------------------------------------

We are applying to help ensure the continued development of our project. PyDy
was previously developed by GSoC projects funded under Portland State
University (Dale Peterson in 2009), Sympy (Gilbert Gede in 2011, Angadh
Nanjangud in 2012, Sachin Joglekar in 2013), and the Python Software Foundation
(Tarun Gaba in 2013) and the primary component is now a part of Sympy
(sympy.physics.mechanics), but it has grown outside the scope of Sympy.
Therefore, we need development energy outside of parts which would belong
within Sympy. Sympy is a symbolic mathematics library for Python and as such,
software that is largely numerical, or written languages other than Python, or
is a user application(rather than a library), does not fit within their
mission.

Our ultimate goal is to create a dynamics software ecosystem (both libraries
and end user applications) that spans various various languages
(Python/C/C++/Fortran/Javascript) and allows students, teachers, and
researchers in academia, those in industry, as well as interested hobbyists to
do high level modelling and simulation (both symbolic and numeric).We are
working with scientists in the field of multibody dynamics to contribute to the
software so developments in multibody dynamics algorithms are incorporated into
this software. GSoC helps us achieve this goal.

By participating, we hope to gain users and developers who can help boost the
development of our project and provide useful tools to a wider community. So
far, our project has grown with the help of SymPy. SymPy is a large more mature
project that has been able to house a core component of our software, but now
that we are growing, our code base is extending beyond the scope of SymPy. We'd
like to leverage GSoC to give us a boost in the development of our independent
project.

Has your organization participated in past Google Summer of Codes? (yes/no)
---------------------------------------------------------------------------

No, our organization has not participated, but three of our mentors have
participated in Google Summer of Code projects under other mentoring
organizations and mentored a total of 5 GSoC projects in the past 4 years.

If you answered “yes” to the question above, please summarize your involvement and the successes and challenges of your participation. Please also list your pass/fail rate for each year.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Our project started as a GSoC project in 2009 under Portland State University
and was further developed in GSoC projects during 2011 and 2012 under the SymPy
project. In 2013, one of our projects was incorporated under the SymPy
umbrella, and two others, under Python Software Foundation. Apart from one, all
of the students passed with flying colors and we now have a core symbolic
equation of motion generation engine. Our biggest success has been getting the
software to be used in the graduate multibody dynamics course at UC Davis in
2012, as well as verifying that the software correctly derives equations of
motion for non-trivial three dimensional systems which have benchmark results
in the scientific literature. Moreover, our work on a vector-space modelling
framework has lead to the ongoing development of an independent 'vector'
sub-package for sympy.physics, with capabilities needed for other applications
apart from just mechanics. Our biggest challenge is in making it easy for
people to get started using the software within the Python ecosystem; the
installation of all the relevant tools (NumPy, SciPy, matplotlib, IPython) has
proved a significant barrier for many of our potential users who are typically
used to an all-in-one commercial solution such as Matlab. We also plan to
develop an end-user GUI based interface that can tackle most common problems.
Our goal is to develop open source software that is superior to enterprise
multi-body dynamics packages, which may cost as high as $20,000 a seat.

If your organization has not previously participated in Google Summer of Code, have you applied in the past? If so, for what year(s)?
-------------------------------------------------------------------------------------------------------------------------------------

Members of our organization participated as students and mentors in GSoC in
2009, 2011, 2012 and 2013 under different organizations as stated above.

What Open Source Initiative approved license(s) does your project use?
----------------------------------------------------------------------

In general, the 3-clause BSD license. We plan to use liberal licenses so that
our software is easily usable by commercial entities, among others.

What is the URL for your Ideas list?
------------------------------------

`<https://pydy.org/gsoc_2013_ideas>`_

What is the main development mailing list for your organization?
----------------------------------------------------------------

Currently, all of the development is done in the SymPy mailing list but now
that portions of our project has outgrown SymPy, activity has been rising on
the PyDy mailing list.

What is the main IRC channel for your organization?
---------------------------------------------------

The core of the software is developed under SymPy so we hang out on #sympy on
freenode.net, but we also have a new #pydy channel that we use for development
discussion that expands beyond the SymPy project.

Who will be your backup organization administrator?
---------------------------------------------------

Dr. Jason K. Moore will be the backup administrator. He’s been involved in the
project organization and mentorship from the beginning.

What criteria did you use to select the mentors? Please be as specific as possible.
-----------------------------------------------------------------------------------

Currently we have five mentors. These mentors make up the core dev team for the
PyDy project. All of the mentors are either current graduate students studying
advanced multibody dynamics and control or have a PhD in the same topics.
Furthermore, four of the mentors have been previous GSoC participants (2009,
2011, 2012, 2013). All four mentors have extensive experience with open source
software development. Future mentors will be selected based on their
participation and/or applicable experience with both software development and
the engineering principles that we utilize. Selection as a mentor will be based
on approval by current mentors and the project team.

What is your plan for dealing with disappearing students? Please be as specific as possible.
--------------------------------------------------------------------------------------------

Interacting and getting to know the applicants before the application deadline
allows us to determine whether we will accept a student, and this greatly
reduces the likelihood of a student disappearing after the summer starts. We
interact and get to know students by requiring a patch as part of our
acceptance criteria -- this guarantees all stakeholders can work together and
gives us as mentors a good idea of what skills the student has and what skills
they need to work on. During the summer we require weekly meetings with the
students via phone, video/voice chat, or in person to ensure quality human
interactions and provide valuable feedback. Weekly blog posts by the students
are also required and will be reviewed by the mentors. If a student disappears,
these weekly interactions ensure we will know about the disappearance quickly
and can take steps to resolve the issue. If a student disappears completely and
we are unable to reach him/her via email, phone, or physically, we will report
the issue to Google and issue a failing midterm and/or final progress report.
As much as possible we prefer to pre-screen the applicants to ensure that
disappearances are extremely unlikely.

What is your plan for dealing with disappearing mentors? Please be as specific as possible.
-------------------------------------------------------------------------------------------

We will always have a backup mentor for each position. The primary and
secondary mentors can mentor in a team or the secondary mentor can come in if
the primary mentor can not maintain the position. As it stands, the current
four existing mentors will also be mentoring in a team effort and we plan to
encourage that method throughout the summer.

What steps will you take to encourage students to interact with your project's community before, during and after the program?
------------------------------------------------------------------------------------------------------------------------------

The student applicants first must submit a message of interest and intent to
the PyDy mailing list. We then have the student read over materials about the
project available on our website and any other affiliated projects. At this
point, we encourage the student to clone the git repository, install the
software, and get familiar with its use. Once the student has some familiarity
with the project we help them select a possible predefined project idea and/or
develop their own idea. We will require applicants to write a proposal on the
pydy.org wiki which includes information about themsevles, their relevant
experience, a project proposal, and a timeline with goals and milestones for
each week of the summer. The students will be encouraged to develop their
proposals on the relevant public mailing lists and IRC channels so that they
have early engagement and commentary from the current community. Lastly, the
students will be required to submit a pull request to a software codebase that
they intend to work with. This will ensure students engage and communicate
about code with the community.

During the course of the summer program students will be required to write a
weekly blog post that will be aggregated on the PyDy website. The mentors and
community members will review the blog posts and provide regular feedback. This
will ensure that the students' feel engaged with the community. Hopefully they
will gain a small community around their blog activity. Secondly, we will have
ongoing open conversations on the mailing list and IRC so that the students
will get feedback from the community members. They will also be require to
submit small scope pull requests each week for review, which we will do through
the Github pull request system. Furthermore, the mentors will have regular
meetings with the students to keep them engaged. At least once during the
summer we will try to arrange for all of the students to meet via video Skype
to exchange ideas and meet each other. We will do this early on in the summer
and continue to do so if it proves to be valuable.

After the end of the program we will have hopefully engaged the students enough
that they feel encouraged to stick around. Ownership of a codebase will play
some role in their continued participation. If they feel like others are
relying on them for bug fixes and future enhancements, they will feel some tug
to stay around and continue developing the software. We will also explicitly
encourage students to become mentors at this point and bring them into the fold
of the core dev team.

Are you a new organization who has a Googler or other organization to vouch for you? If so, please list their name(s) here.
---------------------------------------------------------------------------------------------------------------------------

Currently our software code base is primarily within the SymPy project which
has been developed under three previous Google Summer of Code projects. The
SymPy core team, of which some of our project leads are a part, can vouch for
our organization. In particular, Aaron Meurer and Ondřej Čertík from SymPy.
Professors Mont Hubbard and Fidelis Eke at the University of California, Davis
can vouch for our scientific backgrounds.

Are you an established or larger organization who would like to vouch for a new organization applying this year? If so, please list their name(s) here.
-------------------------------------------------------------------------------------------------------------------------------------------------------

No.

What will you do to encourage that your accepted students stick with the project after Google Summer of Code concludes?
-----------------------------------------------------------------------------------------------------------------------

We plan to accept students who need this software to do their work. Our drive
for originally creating it comes mostly for the desire to have something better
than what already exists because we didn’t like the tools (or lack of tools)
our previous generation left us. We believe that leveraging an open source
development model, we can build the best software for dynamics and control
analyses and it will become attractive to a large group of users. We hope that
this concept is also instilled into our students and they also become long term
users and contributors. We’ve noticed this pattern in the first three students
who have contributed. They are still involved and will be our mentors this
year. During the summer the students will be required to blog regularly. These
blogs will feed through the PyDy website allowing students to build some
community and interest around their project. The ownership of the code they
wrote, the need for the software, and the community relationships will be an
encouragement for future participation from the students.
