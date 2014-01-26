The PyDy Roadmap
================

Or, things we want to do next!

Improved web presence
---------------------

Add pages for

*  Installation

*  Examples (github or ipython notebooks)

*  Installation free dynamics.

*  Improve documentation.  Should read like a nice book.

Low level (within SymPy) library functionality
----------------------------------------------

Low level explicit library for dynamics.  A programmatic computer assisted
approach to what would otherwise be done manually.


*  Code output for numerical integration or for arbitrary vector / symbolic
   expression
    * For constrained problems, automatically select "best" independent
      coordinates/speeds and makes calls to nonlinear and linear system solvers
      to determine dependent coordinates/speeds.

*  Easy numerical integration (NDSolve/ode45/odeint)

*  Speed of some operations

*  Characterize implementation complexity (Order(N) and Order(log(N)) are
   possible)

*  User accessible F^* and F for each body and/or particle.
    * F currently isn't associated with the RigidBody or Particle class, so
      separating out terms acting on/from each body isn't currently possible
      with given infrastructure.
    * User accessible R^* and T^* for each body/particle.

*  Testing with a flexible body problem.  A nice rolling rubber doughnut.

*  Parallelize derivation in KanesMethod

*  Refactor KanesMethod implementation so only one code path is used for all
   system constraint cases.

*  Some limited methods to Point and ReferenceFrame to make
   animation/visualization easier.

*  Improve interface to ReferenceFrame, Point, RigidBody, and Particle so that
   a higher level application can easily automatically generate code/script to
   derive EOMs.

*  IPython extensions to use mprint or mlatex printing by default.

*  Visualization of ReferenceFrame and Point trees to be able to quickly at a
   glance see problem structure.

*  Class template for defining a dynamic system.  This would move past the
   script based approach of deriving the equations of motion.  This class could
   either serve as a template that people reuse and adapt to their own
   problems, or it could be designed to subclass.


High level application functionality
------------------------------------

High level functionality, to compete with things such as Adams, Carsim,
SimMechanics.

*  Basic GUI interface to low-level code?  

*  System use cases:
    * Rolling disc
    * Satellite with flexible member
    * Plane
    * Train
    * Bicycle/motorcycle
    * Car/truck
    * Human
    * Robotic arm (control and dynamics)
    * Vibrating equipment of all sorts
    * Manufacturing machines (mills/lathes/printers/presses/saws)

*  Make templates of above systems and identify the key work flow elements so
   that main GUI functionality can be identified.

*  Parametric definition of system, still be able to see symbolic equations.

*  Higher level scripting or actual standalone (web)app?

*  User use cases:
    * People like us who play with symbolics but want a more visual way to
      interact with the problem.  Examples include a GUI with clickable bodies
      which can be inspected in a graphical fashion to see symbolic attributes.
    * People who can define their own problem and want an easy way to visualize
      and perform numeric operations.
    * People who don't have a graduate degree in dynamics and/or are not
      programmers.
    * People who don't want to define the system, they are looking for
      pre-defined systems they can perform minor tweaks to and then simulate
      and see results.

*  Easy way to define a system using 3D models and joint types.

*  Be able to draw your system within the GUI to define the system, somewhat
   like Working Model. Quickly get an intuitive feel for how some system would
   behave.

