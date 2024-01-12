<template>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Matricula</div>
        </a>
  
        <!-- Divider -->
        <hr class="sidebar-divider my-0" />
  
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Inicio</span></a
          >
        </li>
  
        <!-- Divider -->
        <hr class="sidebar-divider" />
  
        <!-- Heading -->
        <div class="sidebar-heading">Interface</div>
  
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-graduation-cap"></i>
            <span>Almunos a Cargo</span>
          </a>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Components:</h6>
              <a class="collapse-item" href="buttons.html">Alumno 1</a>
              <a class="collapse-item" href="cards.html">Almuno 2</a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="http://127.0.0.1:5501/inicio/index2.html"
            data-toggle="collapse"
            data-target="#collapseadd"
            aria-expanded="true"
            aria-controls="collapseadd"
          >
            <i class="fas fa-plus"></i>
            <span>Agregar postulante</span>
          </a>
          <div
            id="collapseadd"
            class="collapse"
            aria-labelledby="headingadd"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Components:</h6>
              <a class="collapse-item" href="buttons.html">Alumno 1</a>
              <a class="collapse-item" href="cards.html">Almuno 2</a>
            </div>
          </div>
        </li>
  
        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="fas fa-fw fa-wrench"></i>
            <span>Matricula</span>
          </a>
          <div
            id="collapseUtilities"
            class="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Utilities:</h6>
              <a class="collapse-item" href="utilities-color.html">1</a>
              <a class="collapse-item" href="utilities-border.html">2</a>
              <a class="collapse-item" href="utilities-animation.html">3</a>
              <a class="collapse-item" href="utilities-other.html">4</a>
            </div>
          </div>
        </li>
  
        <!-- Divider -->
        <hr class="sidebar-divider" />
  
        <!-- Heading -->
        <div class="sidebar-heading">Addons</div>
  
        <!-- Nav Item - Charts -->
        <li class="nav-item">
          <a class="nav-link" href="alumnonuevo.html">
            <i class="fas fa-user-plus"></i>
            <span>Alumno nuevo</span></a
          >
        </li>
  
        <!-- Nav Item - Tables -->
        <li class="nav-item">
          <a class="nav-link" href="alumnoantiguo.html">
            <i class="fas fa-user"></i>
            <span>Alumno antiguo</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="metodpago.html">
            <i class="fas fa-dollar-sign"></i>
            <span>Metodo de pago</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="ayuda.html">
            <i class="fas fa-info"></i>
            <span>Ayuda</span></a
          >
        </li>
  
        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />
  
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <!-- End of Sidebar -->
  
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav
            class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
          >
            <!-- Sidebar Toggle (Topbar) -->
            <button
              id="sidebarToggleTop"
              class="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i class="fa fa-bars"></i>
            </button>
  
            <!-- Topbar Search -->
            <form
              class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
            >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
  
            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              <!-- Nav Item - Search Dropdown (Visible Only XS) -->
              <li class="nav-item dropdown no-arrow d-sm-none">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-search fa-fw"></i>
                </a>
                <!-- Dropdown - Messages -->
                <div
                  class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form class="form-inline mr-auto w-100 navbar-search">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
  
              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                    >Frank Camposano</span
                  >
                  <img
                    class="img-profile rounded-circle"
                    style="width: 50px"
                    src="@/assets/foto.jpg"
                  />
                </a>
                <!-- Dropdown - User Information -->
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div class="dropdown-divider"></div>
                  <a
                    class="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i
                      class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                    ></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <!-- End of Topbar -->
  
          <!-- Begin Page Content !!CONTENIDO !!!!!!!!!!!!!!!!!!!!!!!!1!!-->
          <div class="container-fluid">
            <div class="col-lg-12">
              <!-- Basic Card Example -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Carga de Documentos
                  </h6>
                </div>
                <div class="card-body">
                  <p>
                    Se necesita los siguientes documentos para continuar con el
                    proceso de matrícula Sr:
                  </p>
                  <ul>
                    <p>Frank Camposano DNI: 44888880</p>
                  </ul>
                  <ul>
                    <li>DNI Postulante</li>
                    <li>Foto del Postulante</li>
                  </ul>
                  <div class="col-8 form-group">
                    <p>Debes adjuntar fotos del DNI y del postulante</p>
                    <input type="file" class="form-control" id="txt_archivo" />
                  </div>
                  <div>
                  <button class="btn btn-warning smaller-button" style="margin-left: 10px" @click="redirigir()">
                    LLenar Ficha
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid  FIN CONTENIDO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
        </div>
        <!-- End of Main Content -->
  
        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website FNK 2023</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  
    <!-- Scroll to Top Button-->
  
    <!-- Bootstrap core JavaScript-->
  </template>
      
  
      <script>

      export default {
        methods: {
          redirigir() {
            this.$router.push('/index3');
          }
        }
        



      };
      
        </script>
  
  
  
  
  
  <style scoped>
  
  .smaller-button {
    padding: 5px 10px;
    font-size: 15px;
    display: inline-block;
    width: auto;
  }
  
  
  
  </style>