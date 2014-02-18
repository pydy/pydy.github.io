.. PyDy documentation master file, created by
   sphinx-quickstart on Sun Jan 26 13:02:27 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to the PyDy Wiki!
=========================

Site Overview
-------------

.. toctree::
   :hidden:

   self

.. toctree::
   :titlesonly:

   installation/installation_general
   examples/examples
   management/project_management


Introduction
------------

Welcome to the PyDy project page. PyDy, short for Python Dynamics, is a
*workflow* that utlizes an array of scientific tools written in the Python
programming language to study multibody dynamics. The core of this toolset is
the `SymPy <http://www.sympy.org>`_ **mechanics** package which generates
symbolic equations of motion for complex multibody systems. The remaining tools
used in the PyDy workflow are popular scientific Python packages such as
`NumPy <http://numpy.org/>`_, `SciPy <http://scipy.org>`_,
`IPython <http://ipython.org>`_, and `matplotlib <http://matplotlib.org>`_
which provide code for numerical analyses, simulation, and visualization. We
are a group of engineers and scientists who for one reason or another prefer to
work in Python. You can learn more by reading about our [features](features)
and our [history](history) or [examples](examples).

Announcements
-------------

January 22, 2014
^^^^^^^^^^^^^^^^

PyDy is going to be at PyCon 2014 in Montréal! Jason Moore's presentation
titled "Dynamics and Control with Python" has been accepted as a Tutorial, to
be shown 9:00am - 12:00pm on Wednesday, April 9, 2014
(`tutorial schedules <https://us.pycon.org/2014/schedule/tutorials/>`_). Topics
covered will include:

*  Symbolic derivation of equations of motion for rigid body systems

*  Numerical simulation of the system

*  2D and 3D visualization of the motion of the system

*  Using feedback control for stabilization

Keep an eye on the Github repository being used to develop the presentation:
`PyDy tutorial materials for PYCON 2014 <https://github.com/PythonDynamics/pydy-tutorial-pycon-2014>`_.

May 31, 2013
^^^^^^^^^^^^

Google has announced the results for Google Summer of Code. We are proud to
announce that we got two slots from Google under the Python Software
Foundation. The following projects have been accepted:

Student (Project): Mentor


*  Tarun Gaba (PyDy: Visualization): Jason Moore

*  Varun Josh (PyDy: Code Generation for sympy.physics.mechanics): Jason Moore

Additionally, two related proposals will be accepted through SymPy that relate
to PyDy:


*  Prasoon Shukla (Vector calculus module): Stefan Krastanov and Gilbert Gede

*  Sachin Joglekar (Addition of electromagnetism features to sympy.physics):
  Gilbert Gede and Stefan Krastanov
 
Join me in congratulating these students on their acceptance.

February 23, 2013
^^^^^^^^^^^^^^^^^

Want to develop multibody dynamics software this summer in a large
collaborative open source team?

The PyDy project is searching for ideal candidates to participate in Google’s
Summer of Code (GSoC). Ideal candidates should be a student and have a strong
interest in dynamics, visualization/animation, and have experience with Python,
C/C++, and/or Javascript. PyDy has been developed during three previous GSoC
grants as part of the `SymPy project <http://www.sympy.org>`_. The core
software can derive symbolic equations of motion of complex multibody systems.
`This example problem <http://www.moorepants.info/blog/npendulum.html>`_ gives
you an idea of the current capabilities. This year we are focusing on code
which interfaces these symbolic equations with modern tools for simulation and
visualization (plotting and 3D animation) which will be developed under SymPy
and other relevant projects. The accepted applicant(s) will get high level
experience in Python, C/C++, and Javascript languages, agile open source
development practices, version control, large scale collaboration, and
multibody dynamics including Kane’s and Lagrange’s methods.

If you are interested in applying check out the
:doc:`getting started page <\management\google_summer_of_code>`. Then send an
email to the
`PyDy mailing list <https://groups.google.com/forum/?fromgroups#!forum/pydy>`_
with a brief statement explaining your experience and why you think you are a
good candidate for the position(s). The PyDy team will work directly with the
top candidates to strengthen their GSoC applications.


