# Lithops — Computación Serverless Clúster-Agnóstica

**Lithops** es un robusto framework de software de código abierto en lenguaje Python diseñado para ejecutar masivas cargas de computación paralelas a través del alcance infinito que conceden arquitecturas subyacentes Serverless – lográndolo todo abstractamente sin precisar a los clientes alterar siquiera una pequeña línea de su lógica interna original. Como líder contribuyente del programa troncal, fui un factor integral a fin de elevar drásticamente sus semánticas distribuidas y la convergencia superando los clouds corporativos dirigiéndolo plenamente hacia la computación de altísimo desempeño (entornos HPC e internalizaciones nativas hacia el ecosistema de Kubernetes).

### El Paradigma Computacional Lithops

Incluso superando la elasticidad ilimitada proveniente de soluciones cloud, los impedimentos insalvables para programar funciones, almacenar y operar con contenedores heterogéneos constituyen un complejo obstáculo hacia los analistas y estadísticos. Lithops desterró las dificultades y consolidó la abstracción funcional de nivel asombroso a través de su purista y estilizada Interfaz unificada Map-Reduce Python:

```python
import lithops

def mi_funcion(x):
    return x ** 2

fexec = lithops.FunctionExecutor()
fexec.map(mi_funcion, range(1000))
resultados = fexec.get_result()
```

Consecuentemente el código se engrana imperceptible y equitativamente en **AWS Lambda, GCP Cloud Run, IBM Code Engine, Azure Functions, Kubernetes**, y superordenadores puramente aislados (on-premise)—garantizando absolutas nulidades de codificaciones adaptadas al proveedor de hardware (boilerplate-free deployment). Sus capas ejecutan automáticamente contenedores dependientes, empaquetan subestructuras binarias al instante y sintetizan sus reportes transaccionales de cierre algorítmico.

### Mis Participaciones Fundamentales

#### Optimización Estructural a Kubernetes Re-Arquitectecturado (Colas de Despacho)
Idée y forjé la base fundamental nativa sobre ambientes clúster a factor puramente de un patrón sistémico altamente óptimo designado bajo el calificativo de **cola de trabajo global persistente**. Con el logro de desplazar irrevocablemente los vetustos y densos ecosistemas transaccionales pod-escalados unidimensionalmente (pod-per-invocation) esta reforma modernizadora:
- Subordina envíos asíncronos distribuyendo orgánicamente tareas masivas a conjuntos de Pods Trabajadores altamente preservados en vivo.
- Autoriza escalabilidad de volumen reorientada acorde al incremento transaccional algorítmico calculado.
- Depuró drásticamente fallas al deprimir 10 veces las dependencias pesadas impuestas por lanzamientos lentos en arranques *cold-starts*, rebotando radicalmente el beneficio medido sobre rendimiento transaccional.

#### Integraciones con Paradigmas HPC—BSC MareNostrum 5
Mi avance en factor investigación consolidada consistió en programar, depurar y erigir de un solo asalto la robusta estructura perimetral arquitectónica y de aprovisionamiento de Lithops al formidable **Superordenador MareNostrum 5** implementado globalmente por parte del Barcelona Supercomputing Center. Su inmersión computacional:
- Destrabó capacidades limitadas instaurando flujos masivos condicionados temporalmente bajo la semántica *serverless event-driven* sin precedentes para clústeres restringidos y orientados a CPU-nodes.
- Liquidó rotunda y totalmente en una porción significativa desproporcionados factores históricos causados del malogro de esperas incondicionales a través de colas jerarquizadas o sistema de lotes estáticos pautados en CPU.
- Acuñó reportes en base a las cuantificaciones empíricas con métricas asombrosas en donde se rebasaba ampliamente ratios formales preexistentes I/O en factores de las más prestigiosas redes Cloud Empresariales internacionales.

Sometí el alcance del citado modelo a nivel formal publicándose formalmente en: **IEEE 2024**: *"Enhancing HPC with Serverless Computing: Lithops on MareNostrum5"*.

#### Estructuraciones y Aprovisionamientos Dask CloudProvider Enlazado
Coadyuvé mediante el establecimiento y el rediseño para integraciones Dask originando una arquitectura posterior bajo el albergue corporativo general denominado **Dask CloudProvider**, amoldando la inmesurable topología funcional nativa bajo ecosistemas de orquestadores de IBM Code Engine y sus robustos contenedores abstraídos en Kubernetes sin gestores. Esto se coronó ratificándose mediante evaluaciones rigurosamente rápidas abaratando el encarecimiento masivo comparativamente ante sistemas preconfigurados como Coiled.

### Lenguajes y Componentes Desplegados
`Python` · `Kubernetes` · `AWS Lambda` · `GCP Cloud Run` · `IBM Code Engine` · `Docker` · `Dask`
