<template>

    <!-- Page Wrapper -->
    <div id="wrapper">
    
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Matricula</div>
            </a>
    
            
    
            <!-- Divider -->
            <hr class="sidebar-divider my-0">
    
            <!-- Nav Item - Dashboard -->
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Inicio</span></a>
            </li>
    
            <!-- Divider -->
            <hr class="sidebar-divider">
    
            <!-- Heading -->
            <div class="sidebar-heading">
                Interface
            </div>
    
            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUser"
                    aria-expanded="true" aria-controls="collapseUser">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Usuarios</span>
                </a>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Almunos a Cargo</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Alumno 1</a>
                        <a class="collapse-item" href="index1">Almuno 2</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="http://127.0.0.1:5501/inicio/index2.html" data-toggle="collapse" data-target="#collapseadd"
                    aria-expanded="true" aria-controls="collapseadd">
                    <i class="fas fa-plus"></i>
                    <span>Agregar postulante</span>
                </a>
                <div id="collapseadd" class="collapse" aria-labelledby="headingadd" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Alumno 1</a>
                        <a class="collapse-item" href="index1">Almuno 2</a>
                    </div>
                </div>
            </li>
    
            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Matricula</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
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
            <hr class="sidebar-divider">
    
            <!-- Heading -->
            <div class="sidebar-heading">
                Addons
            </div>
    
       
    
            <!-- Nav Item - Charts -->
            <li class="nav-item">
                <a class="nav-link" href="alumnonuevo.html">
                    <i class="fas fa-user-plus"></i>
                    <span>Alumno nuevo</span></a>
            </li>
    
            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="alumnoantiguo.html">
                    <i class="fas fa-user"></i>
                    <span>Alumno antiguo</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="metodpago.html">
                    <i class="fas fa-dollar-sign"></i>
                    <span>Metodo de pago</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="ayuda.html">
                    <i class="fas fa-info"></i>
                    <span>Ayuda</span></a>
            </li>
    
            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">
    
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
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    
                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>
    
                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
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
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
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
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Frank Camposano</span>
                                <img class="img-profile rounded-circle" style="width: 50px;"
                                    src="@/assets/foto.jpg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
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
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
    
                    </ul>
    
                </nav>
                <!-- End of Topbar -->  
            
                <!-- Begin Page Content !!CONTENIDO !!!!!!!!!!!!!!!!!!!!!!!!1!!-->
                <div>
                    <div class="card-body"> 
 

                        <!-- Modal -->
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-plus"></i>
    Agregar
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Agregar Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="tipoDocumento">Tipo de documento</label>
            <select class="form-control" id="tipoDocumento">
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Carnet de identidad">Carnet de identidad</option>
            </select>
          </div>
          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="nombres">Nombres</label>
                <input type="text" class="form-control" id="nombres">
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input type="text" class="form-control" id="apellidos">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="correo">Correo</label>
            <input type="email" class="form-control" id="correo">
          </div>
          <div class="form-group">
            <label for="genero">Género</label>
            <select class="form-control" id="genero">
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div class="form-group">
            <label for="rol">Rol</label>
            <input type="text" class="form-control" id="rol">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>





                    <table class="table table-bordered dataTable" style="width:100%">
                    <thead class="table-dark">
                        <tr>
                            <th>Documento ID</th>
                            <th>Tipo de Documento</th>
                            <th>Nombres</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Correo</th>
                            <th>Celular</th>
                            <th>Género</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.documento_id">
                            <td>{{ usuario.documento_id }}</td>
                            <td>{{ usuario.tipo_documento }}</td>
                            <td>{{ usuario.nombres }}</td>
                            <td>{{ usuario.apell_paterno }}</td>
                            <td>{{ usuario.apell_materno }}</td>
                            <td>{{ usuario.correo }}</td>
                            <td>{{ usuario.celular }}</td>
                            <td>{{ usuario.genero }}</td>
                            <td>{{ usuario.fecha_nac }}</td>
                            <td>{{ usuario.rol }}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>

                
                <!-- /.container-fluid -->
    
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


    <style>
    </style>
    
    <script>
    import axios from 'axios';
    
    export default {
      data() {
        return {
          usuarios: [],
          nuevoUsuario: {
            nombres: '',
            apellidos: '',
            dni: '',
            correo: ''
          },
          mostrarModal: false
        };
      },
      mounted() {
        this.obtenerUsuarios();
      },
      methods: {
        obtenerUsuarios() {
          axios.get("http://127.0.0.1:8000/api/usuario/")
            .then(response => {
              this.usuarios = response.data.data; // Almacenar los datos de "data" en la propiedad "usuarios"
            })
            .catch(error => {
              console.log(error);
            });
        },
        mostrarFormulario() {
          this.mostrarModal = true; // Muestra el modal estableciendo la propiedad mostrarModal en true
        },
        guardarUsuario() {
          // Realiza las acciones necesarias para guardar el usuario
          // Puedes acceder a los datos del formulario a través de this.nuevoUsuario
          // Por ejemplo, puedes enviar una solicitud HTTP a tu API para guardar los datos
          axios.post('http://127.0.0.1:8000/api/usuarios', this.nuevoUsuario)
            .then(response => {
              // Lógica para manejar la respuesta de la solicitud
              // Por ejemplo, mostrar una notificación de éxito y actualizar la lista de usuarios
              this.usuarios.push(response.data);
              this.mostrarModal = false; // Cierra el modal estableciendo la propiedad mostrarModal en false
            })
            .catch(error => {
              // Lógica para manejar errores de la solicitud
              // Por ejemplo, mostrar una notificación de error
              console.error(error);
            });
        }
      }
    };
    </script>
    
    