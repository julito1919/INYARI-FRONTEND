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

<!-- Page Heading -->
  
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Requisitos</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Información</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
           
            <div class="container-fluid">

                <div class="col-lg-12">
                    <br>
                    <!-- Basic Card Example -->
                    <div class="card shadow mb-4">
                        
                        <div class="card-body">
                            
                            <div class="col-12 form-group">
                                
                                <div class="container">
                                    <div class="row row-cols-1 row-cols-sm-2">
                                      <div class="col">
                                        <p>Certificado de Estudio</p>
                                        <input type="file" class="form-control" id="txt_archivo">
                                      </div>
                                      <div class="col">
                                            <p>Estado</p>
                                            <button type="button" class="btn btn-outline-success" disabled>Validado</button>
                                      </div>
                                    </div>
                                  </div>
                                <br>
                                <div class="container">
                                    <div class="row row-cols-1 row-cols-sm-2">
                                      <div class="col">
                                        <p>DNI</p>
                                        <input type="file" class="form-control" id="txt_archivo">
                                      </div>
                                      <div class="col">
                                        <p>Estado</p>
                                        <button type="button" class="btn btn-outline-warning" disabled>Por Validar</button>

                                      </div>
                                    </div>
                                  </div>
                                <br>
                                <div class="container">
                                    <div class="row row-cols-1 row-cols-sm-2">
                                      <div class="col">
                                        <p>Constancia de Conducta</p>
                                        <input type="file" class="form-control" id="txt_archivo">
                                      </div>
                                      <div class="col">
                                        <p>Estado</p>
                                        <button type="button" class="btn btn-outline-secondary" disabled>No enviado</button>

                                      </div>
                                    </div>
                                  </div>
                                <br>
                                <div class="container">
                                    <div class="row row-cols-1 row-cols-sm-2">
                                      <div class="col">
                                        <p>Certificado de no Adeudo</p>
                                        <input type="file" class="form-control" id="txt_archivo">
                                      </div>
                                      <div class="col">
                                        <p>Estado</p>
                                        <button type="button" class="btn btn-outline-danger" disabled>Denegado</button>

                                      </div>
                                    </div>
                                  </div>
                                  <br>
                                  <br>
                              </div>
                              <div class="d-flex justify-content-between">
                                <button class="btn btn-success">Enviar Documentos</button>
                                <div>
                                  <button class="btn btn-secondary">Volver</button>
                                </div>
                              </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="container-fluid">

                <div class="col-lg-12">
                    <br>
                    <!-- Basic Card Example -->
                    <div class="card shadow mb-4">
                        
                        <div class="card-body">
                            <div class="container">
                                <div class="row row-cols-2 row-cols-lg-3">
                                  <div class="col">
                                    <p class="text-center"> Constancia de Matrícula </p>
                                    <div class="d-flex justify-content-center">
                                        <img src="Blue.jpg" width="80" class="rounded" alt="...">
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-outline-dark">Visualizar</button>
                                    </div>
                                  </div>

                                  <div class="col">
                                    <p class="text-center"> Horario de Clases </p>
                                    <div class="d-flex justify-content-center">
                                        <img src="Blue.jpg" width="80" class="rounded" alt="...">
                                    </div>
                                    
                                    <div class="text-center">
                                        <button type="button" class="btn btn-outline-dark">Visualizar</button>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <p class="text-center"> Reglamento de Colegio </p>
                                    <div class="d-flex justify-content-center">
                                        <img src="Blue.jpg" width="80" class="rounded" alt="...">
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-outline-dark">Visualizar</button>
                                        
                                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    <br>

                                  </div>
                                  
                                  <div class="col">
                                    <p class="text-center"> Contrato de Servicio </p>
                                    <div class="d-flex justify-content-center">
                                        <img src="Blue.jpg" width="80" class="rounded" alt="...">
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-outline-dark">Visualizar</button>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <p class="text-center"> Lista de Útiles </p>
                                    <div class="d-flex justify-content-center">
                                        <img src="Blue.jpg" width="80" class="rounded" alt="...">
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-outline-dark">Visualizar</button>
                                    </div>
                                  </div>

                                  <div class="col">
                                    <p class="text-center"> Tutorial de Intranet </p>
                                    <div class="d-flex justify-content-center">
                                        <img src="Blue.jpg" width="80" class="rounded" alt="...">
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-outline-dark">Visualizar</button>
                                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                  </div>

                                </div>
                              </div>
                            <div class="text-right">
                                <button class="btn btn-primary">Aceptar</button> <!-- Agrega un botón de "Aceptar" -->
                                <button class="btn btn-secondary">Volver</button> <!-- Agrega un botón de "Cancelar" -->
                              </div>
                            
                        </div>

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
            
        
        <script lang="ts" setup>
  </script>
        
        
        
        
        
        <style scoped>
  .form-group {
    display: flex;
    align-items: center;
  }
  
  .form-group .icheck-success {
    margin-right: 20px;
  }
  
  .form-group label {
    margin-left: 10px;
    font-weight: normal;
    font-size: small;
  }
  
  .smaller-button {
    padding: 5px 10px;
    font-size: 14px;
    display: inline-block;
    width: 150px;
    margin-left: 100px;
  }
  .option-seleccionar {
    width: 100%;
    font-size: 15px;
    display: inline-block;
    width: 150px;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .button-container button {
    max-width: 300px;
    margin-right: 50px;
  }
  </style>