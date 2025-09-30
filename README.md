# React + TypeScript + Vite

https://lms.ebac.mx/lesson/91aaeead-c361-46c2-ba40-ea906b4d97af

Paso a paso:

Crea un nuevo proyecto React con TypeScript usando create-react-app o Vite.

Organiza las carpetas en una estructura lógica

Identifica las secciones principales de la aplicación para migrarlas a React, incluyendo el Header, que contiene el título, el logotipo y el menú de navegación; el Formulario de Registro de Guías para ingresar información de nuevas guías; el Panel de Estado General, que ofrece un resumen del estado del sistema mostrando los contadores de guías activas, en tránsito y entregadas; la Lista de Guías, que despliega la información de cada guía junto con opciones para actualizar el estado y ver el historial.

Crea un componente para cada sección dentro de la carpeta components/

Define los tipos en TS para los datos que maneja tu aplicación. Por ejemplo, crea una interfaz de TS para representar una guía.

Utiliza los hooks useState y useEffect para implementar las funcionalidades principales de la aplicación, incluyendo la gestión de estados locales, el control de efectos secundarios, y la sincronización de datos entre componentes para garantizar un comportamiento dinámico y reactivo. Por ejemplo (considera que puede variar):

const [guides, setGuides] = useState<Guide[]>([]); 

const [history, setHistory] = useState<HistoryEntry[]>([]); 

useEffect(() => { console.log('El estado de guías ha cambiado:', guides); }, [guides]);

Pasa las funciones necesarias como props entre los componentes.

Verifica que el registro de guías en el Formulario de Registro de Guías, la actualización de estados en la Lista de Guías, y la consulta del historial desde la Lista de Guías funcionen correctamente, asegurando que los cambios se reflejen también en el Panel de Estado General y que la aplicación sea coherente e intuitiva para el usuario


¿Cómo presentar su entrega?

Sube tus cambios a tu repositorio de Github y comparte tu link.

Tiempo estimado de resolución: 240 minutos