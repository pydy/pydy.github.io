Google Summer of Code 2013 Ideas
================================

Efficient EoM Generation
------------------------

Difficulty: Medium to Hard

Projects: SymPy

Currently we have basic equation of motion generation with automated Kane's and
Lagrange's methods. The algorithm's that derive these equations of motion can
be improved in both speed of computation and the resutling simplification of
the equations of motion. This project would involve cleaning up the code base,
profiling to find the slow functions, and digging into the SymPy codebase for
trigsimpification and other relevant function calls to speed up the EoM
generation. These modification will help speed up both the entire SymPy
codebase and the Mechanics package.

Linearization
-------------

Difficulty: Medium

Projects: SymPy

Currently, only the KanesMethod class has a linearization method. We'd like to
implement standalone classes for linearization of generic equations of motion
with constraints using the methods in "A linearization procedure for
constrained multibody systems" by Peterson, Gede, and Hubbard. 

Efficient Code Generation
-------------------------

Difficulty: Medium to Hard

Projects: SymPy

Currently, SymPy Mechanics can derive the symbolic equations of motion of
complex mutlibody systems. These continuous differential equations can be
solved to find the state trajectories through time. But in only the simplest
systems can these differential equations be integrated symbolically. In
general, one must integrate the differential equations numerically using
various integration routines. For example, SciPy provides functionality for
integrating ordinary differential equations as do many other software packages.
A classic approach to problems such as these is to automatically generate code
that can be integrated using robust numerical routines. We'd like to develop
code output classes to interface with KanesMethod and LagrangesMethod classes
that utilize SymPy code generation package. Generated code should be able to be
directly run and/or compiled and run to perform a numerical integration of the
equations of motion and produce time history of states. Besides developing the
code generation classes for the KanesMethod and LagrangesMethod results, we'd
like to spend some time improving the general code generation portions of SymPy
and the common subexpression elimination routines. For example, Common
subexpression elimination (cse) takes a long time (>1 hour) to run on systems
of equations that are derived in a very short period of time (< 1 minute). This
needs to be improved. We'd also like to look into utilizing or learning from
other code bases that generate effcient code, such as Theano.

Difficulty: Medium

Projects: PyDy, SciPy or other projects with numerical integration routines

Another approach to solving ordinary differential equations would be to
implement a Mathematica-like NDSovle and InterpolatingFunction classes for
numerically solving differential equations. This is different than the code
output classes, in that all of the numerics are done at runtime instead of
generating separate external code. NDSolve would likely be external to SymPy
due to its numerical rather than symbolic nature, but would need to be
discussed with the SymPy devs to determine the best location.

Visualization of System Motion
------------------------------

Difficulty: Easy

Projects: PyDy and other 2D/3D visualization toolkits

Generating 2D and/or 3D animations of mechanical systems quickly and easily
would be quite useful for understanding the behavior of these systems. Identify
a long term stable solution (pyglet, PyOpenGL, vtk, mayavi, webgl, etc) for
generating animations and designing nice interfaces between the existing SymPy
Mechanics classes to this solution. The EoM classes, KanesMethod and
LagrangesMethod, would need to be extended to produce relevant translational
and rotational information for each body and particle in the system. This
combined with metadata to capture the bodies' shapes and physical descriptions
could then be used by the visualization toolkit chosen to visualize the motion
of the system through time. The visualization software could be desktop based
or web browser based using the latest web 3D technologies. This could be done
by adding 3D animation of multibody systems using WebGL within the browser
based in IPython notebooks, for example. Examples of open source products that
could be integrated with PyDy are `<http://gazebosim.org/>`_,
`<http://adamleeper.com/simulation/index.html>`_, `<http://blender.org>`_.

Interactive Generation of a System
----------------------------------

Difficulty: Hard

Projects: SymPy and other 2D/3D visualization interactive toolkits

Develop GUI based tool for creating multi-body models. This would include a 2D
and/or 3D drag-n-drop workspace where you can add in basic bodies, add
kinematic constraints, and apply forces. This interactive work would generate
SymPy Mechanics code on the fly and thus the equations of motion. If the code
output or NDSolve functionality is available, the visualization could even be
animated in the same interactive workspace. The commerical product Working
Model has features similar to this.

Flexilbe Body Support
---------------------

Difficulty: Hard

Projects: SymPy

SymPy Mechanics currently only deals with rigid bodies. It is possible to
extend the code base to include the functionality for deriving the equations of
motion of systems that include flexible bodies. Flexible bodies can be
described by both spatial and time varying partial differential equations. One
approach that would integrate well with the KanesMethod class is described in
"Dynamics of an Arbitrary Flexible Body in Large Rotation and Translation" by
Arun K. Banerjee and John M. Dickenst, but there are many other algorithms that
could be introduced. This project would lie primarily in SymPy by extending the
classes in mechanics to handle the spatial variables and including the
automatic derivation of the flexible equations of motion.

Robust Testing
--------------

Difficulty: Easy

Projects: SymPy, PyDy

Our testing suite currently implements several benchmark problems that have
well known solutions in the literature. We like to restructure the tests so
that both Kane's method and Lagrange's method (and any future methods) will
test the same set of benchmark dynamics problems. We'd also like to make it
very easy to add benchmark problems to the test suite (in particular
non-trivial cases) so that the current EoM methods and any future methods will
automatically be tested against these problems.

Documentaion
------------

Difficulty: Easy

Projects: SymPy, PyDy

Ideally we'd like a textbook like document that can teach basic to advanced
dynamics with PyDy which can be used along with the software to teach high
school physics through advanced graduate courses. This will involve the
development of tons of clean and clear example problems along with theory on
mechanics.

Secondly, we'd like to improve the documentation efforts both in the SymPy docs
and on PyDy.org which will give much more material and examples for students to
learn from. There is lots of work to here and any other project ideas will be
expected to contribute strong documentation with their code contributions.

Random
------

Difficulty: Variable

Projects: Variable

  * IPython extensions to use mprint or mlatex printing by default.
  * Integrate our system with other popular physics engines such as MBDyn,
    Bullet, etc.
  * Also see ideas from last year [[gsoc_2012_ideas]] and the [[roadmap]] for
    more inspiration.
