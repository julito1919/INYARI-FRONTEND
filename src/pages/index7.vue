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
<h1 class="h3 mb-4 text-gray-800">Pre Matrícula</h1>
<!-- Content Row -->
<div class="row">

    <!-- Grow In Utility -->
    <div class="col-lg-12">

        <div class="card position-relative">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Datos del Alumno</h6>
            </div>

            <div class="card-body row">
                <div class="col-lg-6">
                    <div class="card-body row">
                        <label for="representante" class="col-lg-5 align-self-center">1. Apellido Paterno:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <input type="text" class="form-control" value="Perez">
                        </div><br>
                    
                        <label for="representante" class="col-lg-5 align-self-center">2. Apellido Materno:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <input type="text" class="form-control" value="Correa">
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">3. Nombres:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <input type="text" class="form-control" value="Juan">
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">4. Género:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <select id="representante" name="representante"  class="form-control">
                            <option value="masculino" selected>Masculino</option>
                            <option value="femenino">Femenino</option>
                            </select>
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">5. Tipo de Documento:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <select id="representante" name="representante"  class="form-control">
                            <option value="dni" selected>DNI</option>
                            <option value="carnet ext">Carnet Ext</option>
                            </select>
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">6. Número de Documento:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <input type="text" class="form-control" value="87654321">
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">7. Celular:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <input type="text" class="form-control" value="987654321">
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">8. Correo:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <input type="text" class="form-control" value="juanperez@gmail.com">
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">9. Fecha de nacimiento:</label>
                        <div class="col-lg-7 form-group align-self-center">
                            <div class="input-group date">
                                <input type="date" class="form-control" id="datepicker" value="2010-05-05">                                                                                        
                            </div>
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">10. Edad:</label>
                        <div class="col-lg-2 form-group align-self-center">
                            <div>
                                <input type="number" class="form-control" id="numberInput" value="0">                                                    
                            </div>
                        </div><br>
                    </div>

                    <div class="col-lg-12 form-group align-self-center">
                        <p>Descargar:</p>
                    </div>

                    <div class="align-self-center button-container d-flex justify-content-center">
                        <button class="btn btn-primary" style="width: 200px; margin-right: 10px">Constancia de vacante</button>
                        <button class="btn btn-primary " style="width: 200px; margin-left: 10px">Orden de pago</button>
                    </div><br>

                </div>
                <div class="col-lg-6">
                    <div class="card-body row">
                        <label for="representante" class="col-lg-5 align-self-center">11. Seleccionar nivel:</label>
                        <div class="col-7 form-group align-self-center">
                            <select id="representante" name="representante" class="form-control">
                                <option value="inicial">Inicial</option>
                                <option value="primaria">Primaria</option>
                                <option value="secundaria" selected>Secundaria</option>
                            </select>   
                        </div><br>
                    
                        <label for="representante" class="col-lg-12 align-self-center">12. Cuadro de disponibilidad de vacantes:</label>
                        <div class="col-12 form-group align-self-center">
                            <canvas id="Gráfico"></canvas>   
                        </div><br>

                        <label for="representante" class="col-lg-5 align-self-center">13. Seleccionar grado:</label>
                        <div class="col-7 form-group align-self-center">
                            <select id="representante" name="representante" class="form-control">
                                <option value="1ro">1ro (12 - 14 años)</option>
                                <option value="2do completa">2do (13 - 15 años)</option>
                                <option value="3ro" selected>3ro (14 - 16 años)</option>
                                <option value="4to">4to (15 - 17 años)</option>
                                <option value="5to">5to (16 - 18 años)</option>
                            </select>   
                        </div><br><br><br>

                        <div class="col-lg-12 form-group align-self-center">
                            <p>Precios:</p>
                        </div>
                        
                        <div class="col-sm-12">
                        <table class="table table-bordered dataTable" id="dataTable" width="100%"
                            cellspacing="0" role="grid" aria-describedby="dataTable_info"
                            style="width: 100%;">
                            <thead class="table-dark">
                                <tr role="row">
                                    <th class="sorting sorting_asc" tabindex="0"
                                        aria-controls="dataTable" rowspan="1" colspan="1"
                                        aria-sort="ascending"
                                        aria-label="Name: activate to sort column descending"
                                        style="width: 96px;">Precios</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable"
                                        rowspan="1" colspan="1"
                                        aria-label="Position: activate to sort column ascending"
                                        style="width: 96px;">Inicial</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable"
                                        rowspan="1" colspan="1"
                                        aria-label="Office: activate to sort column ascending"
                                        style="width: 96px;">Primaria</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable"
                                        rowspan="1" colspan="1"
                                        aria-label="Age: activate to sort column ascending"
                                        style="width: 96px;">Secundaria</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="odd">
                                    <td class="sorting_1">Matricula</td>
                                    <td>S/. 140</td>
                                    <td>S/. 150</td>
                                    <td>S/. 160</td>
                                </tr>
                                <tr class="even">
                                    <td class="sorting_1">Mensualidad</td>
                                    <td>S/. 280</td>
                                    <td>S/. 300</td>
                                    <td>S/. 320</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                        
                    </div>
                </div>
            </div>                              
        </div><br><br>

        <div class="align-self-center button-container d-flex justify-content-center">
            <button class="btn btn-dark" style="width: 200px; margin-right: 10px">Volver</button>
            <button class="btn btn-success " style="width: 200px; margin-left: 10px">Continuar</button>
        </div><br><br>
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