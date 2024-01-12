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
          
          <!-- Content Row -->
          <div class="row">
            <div
              v-if="mostrarCardPostulante"
              class="card position-relative"
            ></div>
            <!-- Grow In Utility -->
            <div class="col-lg-6">
              <div
                class="card position-relative"
                v-for="postulante in postulantes"
                :key="postulante.nombre"
              ><div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    {{ postulante.nombre }}
                  </h6>
                </div>
                
                <div class="card-body">
                  <div class="mb-3">
                    <code>Año/Grado</code>
                  </div>
                  <div class="small mb-1"></div>
                  <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                    <a class="navbar-brand" href="#">Inicial</a>
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Seleccionar
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right animated--grow-in"
                          aria-labelledby="navbarDropdown"
                        >
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                    <a class="navbar-brand" href="#">Primaria</a>
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Seleccionar
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right animated--grow-in"
                          aria-labelledby="navbarDropdown"
                        >
                          <a class="dropdown-item" href="#">1° Primaria</a>
                          <a class="dropdown-item" href="#">2° Primaria</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">3° Primaria</a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                    <a class="navbar-brand" href="#">Secundaria</a>
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Seleccionar
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right animated--grow-in"
                          aria-labelledby="navbarDropdown"
                        >
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="button-container" style="margin-top: 100px;">
              <button
                class="btn btn-primary"
                type="button"
                style="
                  width: 50%;
                  display: flex;
                  margin: auto;
                  justify-content: center;
                "
                @click="redirigir"
              >
                <i class="fas fa-plus"></i> Agregar Nuevo Postulante
              </button>
              <button class="btn btn-danger" style="
                  width: 50%;
                  display: flex;
                  margin: auto;
                  justify-content: center;
                "  @click="eliminarUltimoPostulante">Eliminar Último Postulante</button>

              
              
              <button
                class="btn btn-info"
                type="button"
                style="
                  width: 50%;
                  display: flex;
                  margin: auto;
                  justify-content: center;
                "
              >
              
                <i class="fas fa-search"></i> Buscar Vacante
              </button>
            </div>
              <br /><br />
            </div>

            <!-- Fade In Utility aca haremos la tabla-->

            <div class="card-body">
              <div class="table-responsive">
                <label for="">SEDE LOS OLIVOS</label><br />
                <b
                  ><i class="fas fa-map-marker" style="color: #e73d3d">&nbsp;</i
                  ><label for="">Calle 34 Urb.El trebol 3ra etapa</label></b
                ><br /><br />

                <div
                  id="dataTable_wrapper"
                  class="dataTables_wrapper dt-bootstrap4"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                      <div class="dataTables_length" id="dataTable_length">
                        <label
                          >Show
                          <select
                            name="dataTable_length"
                            aria-controls="dataTable"
                            class="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          entries</label
                        >
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div id="dataTable_filter" class="dataTables_filter">
                        <label
                          >Search:<input
                            type="search"
                            class="form-control form-control-sm"
                            placeholder=""
                            aria-controls="dataTable"
                        /></label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        class="table table-bordered dataTable"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                        role="grid"
                        aria-describedby="dataTable_info"
                        style="width: 100%"
                      >
                        <thead class="table-dark">
                          <tr role="row">
                            <th
                              class="sorting sorting_asc"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style="width: 95.8889px"
                            >
                              precios
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              aria-label="Position: activate to sort column ascending"
                              style="width: 139.889px"
                            >
                              Inicial
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              aria-label="Office: activate to sort column ascending"
                              style="width: 69.8889px"
                            >
                              Primaria
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              aria-label="Age: activate to sort column ascending"
                              style="width: 30.8889px"
                            >
                              Secundaria
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              aria-label="Start date: activate to sort column ascending"
                              style="width: 72.8889px"
                            >
                              Grado
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              aria-label="Salary: activate to sort column ascending"
                              style="width: 66.8889px"
                            >
                              Vacante
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd">
                            <td class="sorting_1">Matricula</td>
                            <td>$140</td>
                            <td>$150</td>
                            <td>$160</td>
                            <td>3ro</td>
                            <td>Disponible</td>
                          </tr>
                          <tr class="even">
                            <td class="sorting_1">Mensualidad</td>
                            <td>$240</td>
                            <td>$280</td>
                            <td>$320</td>
                            <td>4to</td>
                            <td>Disponible</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div
                        class="dataTables_info"
                        id="dataTable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="dataTable_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="dataTable_previous"
                          >
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                              >Previous</a
                            >
                          </li>
                          <li class="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                              >1</a
                            >
                          </li>
                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                              >2</a
                            >
                          </li>
                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="3"
                              tabindex="0"
                              class="page-link"
                              >3</a
                            >
                          </li>
                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="4"
                              tabindex="0"
                              class="page-link"
                              >4</a
                            >
                          </li>
                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="5"
                              tabindex="0"
                              class="page-link"
                              >5</a
                            >
                          </li>
                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="6"
                              tabindex="0"
                              class="page-link"
                              >6</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next"
                            id="dataTable_next"
                          >
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="7"
                              tabindex="0"
                              class="page-link"
                              >Next</a
                            >
                          </li>
                        </ul>
                      </div>
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
    

<script>
export default {
  data() {
    return {
      postulantes: [{ nombre: "Postulante 1", grado: "", seleccion: "" }],
      // Otros datos de tu componente...
    };
  },

  methods: {
    redirigir() {
      this.postulantes.push({
        nombre: `Postulante ${this.postulantes.length + 1}`,
        grado: "",
        seleccion: "",
      });
    },
    eliminarUltimoPostulante() {
  this.postulantes.pop();
},
  },

  

};
</script>





<style scoped>







</style>