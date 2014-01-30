GSoC 2013 Application:Tarun Gaba
================================

__*An Extension of PyDy to include visualization for dynamics*__

AIM:
----
To write a module using dynamics module (PyDy) for visualization of Newtonian
Mechanics.

Name and contact info:
----------------------
Tarun Gaba

Email:
^^^^^^
tarun.gaba7@gmail.com

IRC:
^^^^
tarzzz on FreeNode

GitHub Username:
^^^^^^^^^^^^^^^^
tarzzz

Blog:
^^^^^
tarzzz-pydy.blogspot.com

About The Applicant:
--------------------

I am currently pursuing undergraduate engineering course from Indian Institute
Of Technology(BHU), Varanasi, India in Metallurgical Engineering
Department, Part III. Although from Material Sciences Background, I had
undergone two semesters of Applied Physics (one semester on classical and one
on Quantum) as part of my undergraduate course.

Also I have sufficient experience in coding in Python and HTML/CSS/JavaScript
to be able to bring out the deliverables mentioned below by the end of the
summer-coding season. I have two semesters worth knowledge of Advanced
Engineering Mathematics. I have done some visualization projects as my
undergraduate course projects also.


I have also patched in SymPy, which is currently hosting the code of the
mechanics package PyDy. I intend to use PyDy as the base for the project.


The pull requests can be checked at links below :-

`<https://github.com/sympy/sympy/pull/1180>`_

`<https://github.com/sympy/sympy/pull/1958>`_

In addition to these patches I have been doing some code refractoring for PyDy,
which I havent patched because they are not compliant with SymPy, as those
refractors are more aimed as a base to provide visualization capabilities.I am
hosting and developing the code at my own repository at:

`<https://github.com/tarzzz/pydy-viz>`_


Introduction:
-------------

 * PyDy is a Symbolic mechanics module, developed itself as a GSoC project as a
   sub-module in SymPy.(GSoC 2009).
 * The module is currently hosted as a part of the SymPy
   package(sympy.physics.mechanics).

I intend to develop a package(taking base as PyDy) that would be able to
visualize the mechanical systems.

This complete code for the package will be divided into three parts(phases).

 * The backend, which will include the Mechanical Systems definition,Equations
   Of Motion (EoM) generation and solving the generated equations, and  would
   be handled by the PyDy(sympy.physics.mechanics) package.
 * The visualization part would be achieved by the Web Graphics Library(WebGL),
   which is a JavaScript API, based on OpenGL ES 2.0, for rendering 2D and 3D
   graphics in a web browser.
 * The interaction between the backend and the JavaScript would be done using
   IPython module, mainly its Display capabilities for JavaScripts and HTML, in
   IPython Notebooks.

Although some other modules(Flask, Django, etc.) were also considered for the
integration of the Javascript and Python, but they carry a lot of overhead.
therefore IPython is considered to be a better option.

This extension would serve to port the PyDy from SymPy to a different
package (repository), since the changes/modifications/feature-implementations
might not be compliant with SymPy coding regulations.I have already consulted
the lead authors of PyDy and they have shown willingness, as well as their
interest for porting the package code to a different repository.


Also I have started working on a prototype for the same, which can be checked
here:

`<https://github.com/tarzzz/pydy-viz/>`_

This prototype is more intended to demonstrate the workflow and
module-structure(directory/file) with only some basic feature implementations.

Also I am working on an IPython notebook as well to indicate the workflow in
the prototype. The notebook is available in the repo inside pydy/examples.

Actually I was hoping to show some basic example of mechanical system(e.g.
Double Pendulum) as a prototype. But,I am having my end of term examinations
from (24th April to 20th May), i.e. during the proposal writing/submission
period. I might not be able to do so before the last date of proposal
submission. Nevertheless I will try to do what I can to demonstrate the
workflow ( in the IPython notebook at pydy/examples on the repo:
`<https://github.com/tarzzz/pydy-viz/>`_)


Utility:
--------

Utility of this module:

 * This module can be used as a base module for some future,higher level and
   specific mechanical visualization tools/software,like related to fields of
   robotics etc.Since its code structure is based on SymPy, which is basically
   symbolic, It would be easier to code using the module.
 * It can itself be improved upon to turn into a futuristic, higher level
   visualizer.It can be incrementally improved and extended to include
   different sub-modules like(again) robotics etc.




Implementation:
---------------


*The major Dependencies of the project would be:*

 * Sympy.physics.mechanics
 * IPython
 * glMatrix(A library for Matrix manipulations and handling in JavaScript)

In addition more JavaScript libraries might be utilized if there need is felt
for additional feature implementations.

Here is a detailed workflow of how visualizations would be carried out using
the proposed project:

I am using a simple RigidBody visualization for this workflow.


Mechanics Part:
^^^^^^^^^^^^^^^

 * creation of RigidBody object in Sympy.mechanics, with its dimensional
   matrices,rotation matrices and coordinate matrices (w.r.t. ReferenceFrame).
 * Call a future PyDy method visualize()  ... >>>RigidBody.Visualize()
 * Mechanics method(Visualize) would then utilize display abilities of IPython
   notebooks and would visualize, the RigidBody/ or a System of bodies.


Intermediate Part:
^^^^^^^^^^^^^^^^^^

 * This part will focus to bring the smooth interaction between the Mechanics
   Part and the Visualization Part
 * It will include wrapper functions for basic HTML,and JavaScript functions
   which are basic requirements and aide for WebGL to work.
 * It will also include Visualize function, which will be a method of the Sytem
   Class as well as certain individual classes like Particle, RigidBody etc.
   This function will take up the data of the class and pass it along to the
   specific JavaScript functions for visualization purposes.
 * The visualization function will also call IPython’s display module and
   render the output in a WebGL compliant browser.

Visualization Part:
^^^^^^^^^^^^^^^^^^^

 * This part will include writing JavaScript code for basic shapes and objects
   which will provide and aide to the overall visualization.
 * These basic shapes would be called in required combinations by the wrapper
   functionsfor visualization.
 * Additional features will include saving the configuration in JSON or XML
   format as   a saved copy on their system, or using theme/design/color
   schemes for better viewing. Also generation of IPython notebook for the
   system is an additional feature.



Description of the work (By Timeline):
--------------------------------------

I will finish my college semester by around 13-14th of may and after that I
would be totally dedicated to my GSoC project for the whole summer.

Although my summer vacations would end a little bit earlier,(around the last
week of August), but I would be complete most of the major work before then,
and devote last weeks for code refractoring and writing exhaustive tests and
documentation.

I will start the actual coding work by 17th of june.

The major coding phases will be divided into three parts.Each phase will
include the exhaustive tests and documentation according to the implementation.

Part 1: (extension of mechanics)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This will include extension of code from sympy.physics.mechanics end to be able
to *accept* and *arrange* for the visualizations.

Part 2: (Writing WebGL scripts)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This part will include writing numerous WebGL scripts which would be utilized
for the visualization part.  These scripts would be handled by a wrapper
written in Python, in the form of a submodule.  This part would also include
writing basic html wrappers for creating a decent *Canvas* for handling the
visualizations.

Part 3: (Integration of sympy.physics.mechanics and WebGL scripts/wrapper)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This part will consist mainly of integrating both the parts in a package form,
so that the workflow(as described above) can go on smoothly without any
problems.  This will include writing scripts both on Python end and JavaScript
end.


The weekly summer programme would be as follows

1. (17 - 24 June): 
   Coding start. creation of a System Class for mechanics module.
2. (24 June - 1 July): 
   Adding more functionality to the systems class, to include RigidBodies etc. 
3. (2 - 8 July): 
   Wrapping up System class with functionality to add sub-systems, generation
   of combined EoM's and also write unit-tests for the class and its methods.
4. (9 - 15 July):
   Adding Visualize Method to various existing classes and functions, like for
   point, RigidBody etc.
5. (16 - 22 July):
   Start writing the WebGL scripts. Here first phase would be to write very
   general scripts for creation of a Canvas object, including default canvas
   HTML, alongwith options for customizations(color,size etc.) 
6. (23 - 29 July):
   Continue writing more generic webGL scripts,integrable into the Canvas
   object using Python methods.
   These will include scripts to initiate WebGL in the HTML object, initiating
   Shaders, buffers etc.
7. (30 July - 5 August):
   Second phase (for WebGL) will include writing equivalents for point
   objects, and RigidBody objects which are present in mechanics package. This
   would be the other end of the Point.Visualize() method.  i.e.
   Point.Visualize() --> Initiate WebGL canvas + basic scripts(in IPython) -->
   call method on Point object in WebGL --> show the visualization using
   dislay ablities of IPython.
8. (6 - 13 August):
   Continuing with the creation of objects in webGL for visualization handling.
   This part will include bringing the dynamic factor to the visualizations,
   i.e. w.r.t time. We can see the particles at a particular time by now. This
   duration would include working to implement the changing visualizations
   w.r.t time factor.  This will also include changing forces in time.
9. (14 - 21 August): 
   Since visualizations in mechanics include from a system of two particles to
   a more complex system of a robotic arm to even more complex system of a
   complete humanoid robot(for instance). Hence this phase will include adding
   as much functionality for handling complex systems. This is an open-end,
   since this is incremental and will continue even after GSoC, to improve
   PyDy.
10. (22 - 30 August): 
   Integration of workflow to meet the ends. This phase will include wrapping
   up the code functionality made in the complete summer and making both ends
   meet(mechanics and WebGL visualizations).
11. (31 August - 7 September):
   Writing some examples based on the Workflow, that can be used as starters as
   well as tutorials for new users as well as those who are already using SymPy
   and PyDy to get in touch with features of visualization module. 
12. (8 - 15 September):
   Finishing up, completing documentations and writing combined tests.


References And Sources:
-----------------------
