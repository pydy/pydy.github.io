Commands
========

What follows is a short rundown of the commands used in PyDy. All commands that
you would type in an interactive session are preceded by ''>>> ''.

SymPy Commands
--------------

.. code-block:: python

    >>> from sympy import *

This imports all of the classes and functions in the ''SymPy'' package.  Now we
can do some symbolic math:

.. code-block:: python

    >>> x, y, z = symbols('x y z')
    >>> e = x**2 + y**2 + z**2
    >>> print(e)
    x**2 + y**2 + z**2
    >>> diff(e, x)
    2*x

This creates 3 symbols, x, y, and z, and illustrates how to form a SymPy
expression and take its derivative.

Mechanics commands
------------------

What follows is a list of objects you can create, and functions you can run.
The first step is to import the functions and classes related to mechanics:

.. code-block:: python

    >>> from sympy.physics.mechanics import *

==== Classes ====
Here is a list of classes:
  * ReferenceFrame
  * Point
  * Vector - not created directly
  * Dyadic - not created directly
  * Particle
  * RigidBody
  * KanesMethod
You can call ''help(class)'' to see the help entry for ''class''. For example,
''help(ReferenceFrame)'' to see the help entry for ''ReferenceFrame''.

=== Code Snippets ===
Here are some brief usage examples of common functions and classes. 

.. code-block:: python

    >>> q1, q2 = dynamicsymbols('q1 q2')

Creates two time varying symbols, ''q1'' and ''q2''

.. code-block:: python

    >>> N = ReferenceFrame('N')

This creates a new reference frame named N.

.. code-block:: python

    >>> N.x

Access to the ''x'' basis vector in the ''N'' reference frame

.. code-block:: python

    >>> a = N.x + N.y

Creates a new vector, ''a'', which is the sum of the ''x'' and ''y'' basis
vectors in the ''N'' reference frame.

.. code-block:: python

    >>> P = Point('P')

Creates a point named P.

.. code-block:: python

    >>> K = KanesMethod(N)

FIXME Creates a new ''KanesMethod'' object, used to generate $F_r + F_r^*$,
with ''N'' as the inertial reference frame.

.. code-block:: python

    >>> D = RigidBody('BodyD', masscenter=P, frame=N, mass=2, inertia=I)

Creates a rigid body container and defines the center of mass location, the
body fixed frame, the mass and the inertia.

.. code-block:: python

    >>> Par = Particle()

Creates a new particle container.

Functions
---------

Here is a list of functions:
  * mprint
  * inertia
  * mprint
  * mpprint
  * mlatex
  * cross
  * dot
  * outer
  * kinematic equations
On each of them, you can call ''help(function)'' to see the help entry for
''function''. For example, ''help(inertia)'' will describe what the ''inertia''
function is and how to use it.

Code Snippets
-------------

.. code-block:: python

    >>> mechanics_printing()

Sets the default printing to use the mechanics printing.

.. code-block:: python

    >>> mprint(q1)

Prints ''q1'' using the mechanics printer; use if mechanics_printing is not on.

.. code-block:: python

    >>> I = inertia(N, 1, 2, 3)

Creates an inertia dyadic in the frame N with principle measure numbers of 1,
2, and 3.

.. code-block:: python

    >>> mprint(kinematic_equations([u1,u2,u3], [q1,q2,q3], 'body', '313'))

Prints out kinematic differential equations which relate the body fixed angular
velocity measure numbers ''u1, u2, u3'' to the time derivatives of the
coordinates ''q1, q2, q3'', assuming a 313 (ZXZ) body fixed rotations.
