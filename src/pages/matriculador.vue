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
<h1 class="h3 mb-2 text-gray-800">Documentos</h1>
<!-- DataTales Example -->
<div class="row">
    <div class="card shadow mb-4 col-xl-6">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Tabla alumnos - documentos</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <div class="row my-2">
                        <div class="col-sm-12 col-md-6">
                            <div class="dataTables_length" id="dataTable_length">
                                <label>Mostrar
                                    <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div id="dataTable_filter" class="dataTables_filter">
                                <label>Buscar alumno:
                                    <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTable">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="my-4">
                        <a href="#" class="btn btn-primary btn-icon-split btn-lg">
                            <span class="icon text-white-50">
                                <i class="fas fa-download"></i>
                            </span>
                            <span class="text">Descargar documentos en pantalla</span>
                        </a>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-bordered dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable-info" style="width: 100%;">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Tipo de documento</th>
                                        <th>Alumno</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th rowspan="1" colspan="1">Fecha</th>
                                        <th rowspan="1" colspan="1">Tipo de documento</th>
                                        <th rowspan="1" colspan="1">Alumno</th>
                                        <th rowspan="1" colspan="1">Estado</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr class="odd">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Certificado de estudios</td>
                                        <td>Juan Camposano Perez</td>
                                        <td>Sin validar</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Certificado de estudios</td>
                                        <td>Sofia García Rodríguez</td>
                                        <td>Rechazado</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Certificado de estudios</td>
                                        <td>Alejandro López Pérez</td>
                                        <td>Validado</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Certificado de estudios</td>
                                        <td>London</td>
                                        <td>No enviado</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Partida de nacimiento</td>
                                        <td>San Francisco</td>
                                        <td>Sin validar</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Constancia de no adeudo</td>
                                        <td>New York</td>
                                        <td>Sin validar</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Constancia de no adeudo</td>
                                        <td>London</td>
                                        <td>Sin validar</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Certificado de estudios</td>
                                        <td>New York</td>
                                        <td>Sin validar</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Certificado de estudios</td>
                                        <td>New York</td>
                                        <td>Validado</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">01/02/2023</td>
                                        <td class="">Certificado de estudios</td>
                                        <td>Edinburgh</td>
                                        <td>Validado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-5">
                            <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                        </div>
                        <div class="col-sm-12 col-md-7">
                            <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled" id="dataTable_previous">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                                    </li>
                                    <li class="paginate_button page-item active">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" class="page-link">4</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" class="page-link">5</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" class="page-link">6</a>
                                    </li>
                                    <li class="paginate_button page-item next" id="dataTable_next">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Vista previa</h6>
                <a href="#" class="btn btn-primary btn-icon-split btn-lg">
                    <span class="icon text-white-50">
                        <i class="fas fa-download"></i>
                    </span>
                    <span class="text">Descargar documento</span>
                </a>
            </div>
            <div class="card-body">
                <iframe src="/Pantallas/img/CERTIFICADO DE ESTUDIOS.jpg" width="780" height="600" scrolling="auto"></iframe>
            </div>
        </div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Comentario</h6>
            </div>
            <div class="card-body">
                <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
            </div>
        </div>
        <div class="my-4 text-center">
            <a href="#" class="btn btn-primary btn-icon-split btn-lg btn-danger">
                <span class="icon text-white-50">
                    <i class="fas fa-pen"></i>
                </span>
                <span class="text">Rechazar</span>
            </a>
            <a href="#" class="btn btn-primary btn-icon-split btn-lg btn-success">
                <span class="icon text-white-50">
                    <i class="fas fa-check"></i>
                </span>
                <span class="text">Validar</span>
            </a>
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