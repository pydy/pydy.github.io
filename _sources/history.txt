History
=======

Dale Peterson started graduate school at UC Davis in Fall of 2006 and met
`Jason Moore <http://www.moorepants.info/>`_ in the
[[http://biosport.ucdavis.edu/|Sports Biomechanics Lab]]. They shared a passion
for bicycles, dynamics and control and had both taken the multibody system
dynamics course  at UC Davis (MAE 223, taught by `Dr. Mont Hubbard
<http://mae.ucdavis.edu/faculty/hubbard/hubbard.html>`_ and `Dr. Fedelis Eke
<http://mae.ucdavis.edu/faculty/eke/eke.html>`_). This course teaches Kane's
method for deriving equations of motion, and at that time they also taught
`Autolev <http://www.autolev.com/>`_ (now defunct) in the course. Autolev is
very powerful at symbolic dynamics but lacks important functionality and they
both found themselves wanting a richer set of tools for studying bicycles,
rolling discs, rattlebacks, and other systems that are well described by
classical mechanics. They dreamed of creating an open source tool that was
more extensible and nicer to use, but at the time neither of them had the
programming skills to make the dream a reality.

In Spring of 2007, Dale took `Dr. Jim Crutchfield's
<http://csc.ucdavis.edu/~chaos/>`_ graduate physics course in nonlinear
dynamics and chaos, in which all homework was required to be done using Python.
This was a tall order for a single class! This was Dale's favorite course in
graduate school and his first introduction to chaos and to Python (and some of
the chaos of Python). About a year and a half later (December 2008), Dale was
tinkering with Python and trying to replicate some of the kinematic
functionality that made Autolev so convenient to use. He got some basic classes
created and contacted `Ondřej Čertík <http://ondrejcertik.com/>`, the creator
of the SymPy project to see if he was interested in helping him get started. He
made a trip up to his apartment one weekend in January of 2009, and before he
knew it, he had a good chunk of the functionality he was looking for. Which was
really exciting! Ondřej encouraged Dale to apply to a Google Summer of Code,
so he did, and he spent the summer of 2009 working on a GSoC project that was a
separate project from SymPy. This was a big learning experience, and one of
the things that was learned by the end of the summer was that the software
should have been part of the SymPy project, rather than its own standalone
project. This led to Gilbert Gede (another UC Davis graduate student) taking on
a second GSoC project in which he ported the `original PyDy code
<http://code.google.com/p/pydy/>`_ into SymPy as a sub-package
``sympy.physics.mechanics``. This is what is currently is in the SymPy
repository. The software was introduced to the UC Davis multibody dynamics
course at the beginning of 2012, to replace the aging Autolev. A third GoSC
grant allowed Angadh Nanjangud to add Lagrangian dynamics and many other
features to the code base during the summer of 2012.
