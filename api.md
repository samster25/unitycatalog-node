# Catalogs

Types:

- <code><a href="./src/resources/catalogs.ts">CatalogInfo</a></code>
- <code><a href="./src/resources/catalogs.ts">CatalogListResponse</a></code>
- <code><a href="./src/resources/catalogs.ts">CatalogDeleteResponse</a></code>

Methods:

- <code title="post /catalogs">client.catalogs.<a href="./src/resources/catalogs.ts">create</a>({ ...params }) -> CatalogInfo</code>
- <code title="get /catalogs/{name}">client.catalogs.<a href="./src/resources/catalogs.ts">retrieve</a>(name) -> CatalogInfo</code>
- <code title="patch /catalogs/{name}">client.catalogs.<a href="./src/resources/catalogs.ts">update</a>(name, { ...params }) -> CatalogInfo</code>
- <code title="get /catalogs">client.catalogs.<a href="./src/resources/catalogs.ts">list</a>({ ...params }) -> CatalogListResponse</code>
- <code title="delete /catalogs/{name}">client.catalogs.<a href="./src/resources/catalogs.ts">delete</a>(name, { ...params }) -> unknown</code>

# Schemas

Types:

- <code><a href="./src/resources/schemas.ts">SchemaInfo</a></code>
- <code><a href="./src/resources/schemas.ts">SchemaListResponse</a></code>
- <code><a href="./src/resources/schemas.ts">SchemaDeleteResponse</a></code>

Methods:

- <code title="post /schemas">client.schemas.<a href="./src/resources/schemas.ts">create</a>({ ...params }) -> SchemaInfo</code>
- <code title="get /schemas/{full_name}">client.schemas.<a href="./src/resources/schemas.ts">retrieve</a>(fullName) -> SchemaInfo</code>
- <code title="patch /schemas/{full_name}">client.schemas.<a href="./src/resources/schemas.ts">update</a>(fullName, { ...params }) -> SchemaInfo</code>
- <code title="get /schemas">client.schemas.<a href="./src/resources/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>
- <code title="delete /schemas/{full_name}">client.schemas.<a href="./src/resources/schemas.ts">delete</a>(fullName) -> unknown</code>

# Tables

Types:

- <code><a href="./src/resources/tables.ts">TableInfo</a></code>
- <code><a href="./src/resources/tables.ts">TableListResponse</a></code>
- <code><a href="./src/resources/tables.ts">TableDeleteResponse</a></code>

Methods:

- <code title="post /tables">client.tables.<a href="./src/resources/tables.ts">create</a>({ ...params }) -> TableInfo</code>
- <code title="get /tables/{full_name}">client.tables.<a href="./src/resources/tables.ts">retrieve</a>(fullName) -> TableInfo</code>
- <code title="get /tables">client.tables.<a href="./src/resources/tables.ts">list</a>({ ...params }) -> TableListResponse</code>
- <code title="delete /tables/{full_name}">client.tables.<a href="./src/resources/tables.ts">delete</a>(fullName) -> unknown</code>

# Volumes

Types:

- <code><a href="./src/resources/volumes.ts">VolumeInfo</a></code>
- <code><a href="./src/resources/volumes.ts">VolumeListResponse</a></code>
- <code><a href="./src/resources/volumes.ts">VolumeDeleteResponse</a></code>

Methods:

- <code title="post /volumes">client.volumes.<a href="./src/resources/volumes.ts">create</a>({ ...params }) -> VolumeInfo</code>
- <code title="get /volumes/{name}">client.volumes.<a href="./src/resources/volumes.ts">retrieve</a>(name) -> VolumeInfo</code>
- <code title="patch /volumes/{name}">client.volumes.<a href="./src/resources/volumes.ts">update</a>(name, { ...params }) -> VolumeInfo</code>
- <code title="get /volumes">client.volumes.<a href="./src/resources/volumes.ts">list</a>({ ...params }) -> VolumeListResponse</code>
- <code title="delete /volumes/{name}">client.volumes.<a href="./src/resources/volumes.ts">delete</a>(name) -> unknown</code>

# TemporaryTableCredentials

Types:

- <code><a href="./src/resources/temporary-table-credentials.ts">GenerateTemporaryTableCredentialResponse</a></code>

Methods:

- <code title="post /temporary-table-credentials">client.temporaryTableCredentials.<a href="./src/resources/temporary-table-credentials.ts">create</a>({ ...params }) -> GenerateTemporaryTableCredentialResponse</code>

# TemporaryVolumeCredentials

Types:

- <code><a href="./src/resources/temporary-volume-credentials.ts">GenerateTemporaryVolumeCredentialResponse</a></code>

Methods:

- <code title="post /temporary-volume-credentials">client.temporaryVolumeCredentials.<a href="./src/resources/temporary-volume-credentials.ts">create</a>({ ...params }) -> GenerateTemporaryVolumeCredentialResponse</code>

# Functions

Types:

- <code><a href="./src/resources/functions.ts">FunctionInfo</a></code>
- <code><a href="./src/resources/functions.ts">FunctionListResponse</a></code>
- <code><a href="./src/resources/functions.ts">FunctionDeleteResponse</a></code>

Methods:

- <code title="post /functions">client.functions.<a href="./src/resources/functions.ts">create</a>({ ...params }) -> FunctionInfo</code>
- <code title="get /functions/{name}">client.functions.<a href="./src/resources/functions.ts">retrieve</a>(name) -> FunctionInfo</code>
- <code title="get /functions">client.functions.<a href="./src/resources/functions.ts">list</a>({ ...params }) -> FunctionListResponse</code>
- <code title="delete /functions/{name}">client.functions.<a href="./src/resources/functions.ts">delete</a>(name) -> unknown</code>
