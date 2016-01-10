Download Options
================

Latest release
--------------

The latest release can be downloaded from Github:

https://github.com/pydy/pydy/releases

Extract the archive, on unix systems (Linux, BSD, Mac OS X, Cygwin, etc.) can
be done with the command:

.. code-block:: bash

   $ tar xzf pydy-*.tar.gz

or

.. code-block:: bash

   $ unzip xzf pydy-*.zip

It can be installed after extracting by running the following command in the
source directory:

.. code-block:: bash

   $ python setup.py install

in the project's root directory. (You might have to use "sudo" for system wide install)

Previous releases
-----------------

You can access all the previous releases from the `release's page
<https://github.com/pydy/pydy/releases>`_. This is useful if the latest release
does not work for you for some reason.

Development Version
-------------------

To get the git repository, use:

.. code-block:: bash

   $ git clone git://github.com/pydy/pydy.git

then follow the instructions in the README file.

And you can also access the git repository on the web: https://github.com/pydy/pydy

Packages
--------

PyPi
****

The source distributions are hosted on PyPi at:

https://pypi.python.org/pypi/pydy

If you have ``pip`` installed, you can install by:

.. code-block:: bash

   $ pip install pydy

or, you can manually get the package from PyPi by:

.. code-block:: bash

   $ wget https://pypi.python.org/packages/source/p/pydy/pydy-X.X.X.tar.gz

extract and install by:

.. code-block:: bash

   $ tar -zxvf pydy-X.X.X.tar.gz
   $ cd pydy-X.X.X
   $ python setup.py install

Anaconda
********

Binary packages are hosted at:

https://anaconda.org/pydy/pydy

These can be installed with conda::

   $ conda install -c pydy pydy

To get all of the dependencies for running the PyDy examples you can install
this metapackage::

   $ conda install -c pydy pydy-examples
