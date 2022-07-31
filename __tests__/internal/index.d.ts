
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  email: string
  created_at: Date
}

/**
 * Model Survey
 * 
 */
export type Survey = {
  id: string
  title: string
  description: string
  created_at: Date
}

/**
 * Model SurveyToUser
 * 
 */
export type SurveyToUser = {
  id: string
  value: number | null
  created_at: Date
  user_id: string
  survey_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<GlobalReject>;

  /**
   * `prisma.surveyToUser`: Exposes CRUD operations for the **SurveyToUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyToUsers
    * const surveyToUsers = await prisma.surveyToUser.findMany()
    * ```
    */
  get surveyToUser(): Prisma.SurveyToUserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.0
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Survey: 'Survey',
    SurveyToUser: 'SurveyToUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    surveys: number
  }

  export type UserCountOutputTypeSelect = {
    surveys?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type SurveyCountOutputType
   */


  export type SurveyCountOutputType = {
    users: number
  }

  export type SurveyCountOutputTypeSelect = {
    users?: boolean
  }

  export type SurveyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SurveyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SurveyCountOutputType
    : S extends undefined
    ? never
    : S extends SurveyCountOutputTypeArgs
    ?'include' extends U
    ? SurveyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SurveyCountOutputType ? SurveyCountOutputType[P] : never
  } 
    : SurveyCountOutputType
  : SurveyCountOutputType




  // Custom InputTypes

  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SurveyCountOutputType
     * 
    **/
    select?: SurveyCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    surveys?: boolean | SurveyToUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    surveys?: boolean | SurveyToUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'surveys' ? Array < SurveyToUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'surveys' ? Array < SurveyToUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    surveys<T extends SurveyToUserFindManyArgs = {}>(args?: Subset<T, SurveyToUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SurveyToUser>>, PrismaPromise<Array<SurveyToUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Survey
   */


  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    created_at: Date | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    created_at: Date | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    created_at: number
    _all: number
  }


  export type SurveyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type SurveyAggregateArgs = {
    /**
     * Filter which Survey to aggregate.
     * 
    **/
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs = {
    where?: SurveyWhereInput
    orderBy?: Enumerable<SurveyOrderByWithAggregationInput>
    by: Array<SurveyScalarFieldEnum>
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }


  export type SurveyGroupByOutputType = {
    id: string
    title: string
    description: string
    created_at: Date
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    users?: boolean | SurveyToUserFindManyArgs
    _count?: boolean | SurveyCountOutputTypeArgs
  }

  export type SurveyInclude = {
    users?: boolean | SurveyToUserFindManyArgs
    _count?: boolean | SurveyCountOutputTypeArgs
  }

  export type SurveyGetPayload<
    S extends boolean | null | undefined | SurveyArgs,
    U = keyof S
      > = S extends true
        ? Survey
    : S extends undefined
    ? never
    : S extends SurveyArgs | SurveyFindManyArgs
    ?'include' extends U
    ? Survey  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < SurveyToUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? SurveyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < SurveyToUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? SurveyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Survey ? Survey[P] : never
  } 
    : Survey
  : Survey


  type SurveyCountArgs = Merge<
    Omit<SurveyFindManyArgs, 'select' | 'include'> & {
      select?: SurveyCountAggregateInputType | true
    }
  >

  export interface SurveyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurveyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SurveyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Survey'> extends True ? CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>> : CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurveyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SurveyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Survey'> extends True ? CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>> : CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SurveyFindManyArgs>(
      args?: SelectSubset<T, SurveyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Survey>>, PrismaPromise<Array<SurveyGetPayload<T>>>>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
    **/
    create<T extends SurveyCreateArgs>(
      args: SelectSubset<T, SurveyCreateArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
    **/
    delete<T extends SurveyDeleteArgs>(
      args: SelectSubset<T, SurveyDeleteArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurveyUpdateArgs>(
      args: SelectSubset<T, SurveyUpdateArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurveyDeleteManyArgs>(
      args?: SelectSubset<T, SurveyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurveyUpdateManyArgs>(
      args: SelectSubset<T, SurveyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
    **/
    upsert<T extends SurveyUpsertArgs>(
      args: SelectSubset<T, SurveyUpsertArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Find one Survey that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SurveyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Find the first Survey that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SurveyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SurveyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends SurveyToUserFindManyArgs = {}>(args?: Subset<T, SurveyToUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SurveyToUser>>, PrismaPromise<Array<SurveyToUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Survey base type for findUnique actions
   */
  export type SurveyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter, which Survey to fetch.
     * 
    **/
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey: findUnique
   */
  export interface SurveyFindUniqueArgs extends SurveyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Survey base type for findFirst actions
   */
  export type SurveyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter, which Survey to fetch.
     * 
    **/
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     * 
    **/
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     * 
    **/
    distinct?: Enumerable<SurveyScalarFieldEnum>
  }

  /**
   * Survey: findFirst
   */
  export interface SurveyFindFirstArgs extends SurveyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter, which Surveys to fetch.
     * 
    **/
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     * 
    **/
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SurveyScalarFieldEnum>
  }


  /**
   * Survey create
   */
  export type SurveyCreateArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * The data needed to create a Survey.
     * 
    **/
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }


  /**
   * Survey update
   */
  export type SurveyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * The data needed to update a Survey.
     * 
    **/
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     * 
    **/
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs = {
    /**
     * The data used to update Surveys.
     * 
    **/
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     * 
    **/
    where?: SurveyWhereInput
  }


  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * The filter to search for the Survey to update in case it exists.
     * 
    **/
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     * 
    **/
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }


  /**
   * Survey delete
   */
  export type SurveyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter which Survey to delete.
     * 
    **/
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs = {
    /**
     * Filter which Surveys to delete
     * 
    **/
    where?: SurveyWhereInput
  }


  /**
   * Survey: findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs = SurveyFindUniqueArgsBase
      

  /**
   * Survey: findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs = SurveyFindFirstArgsBase
      

  /**
   * Survey without action
   */
  export type SurveyArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
  }



  /**
   * Model SurveyToUser
   */


  export type AggregateSurveyToUser = {
    _count: SurveyToUserCountAggregateOutputType | null
    _avg: SurveyToUserAvgAggregateOutputType | null
    _sum: SurveyToUserSumAggregateOutputType | null
    _min: SurveyToUserMinAggregateOutputType | null
    _max: SurveyToUserMaxAggregateOutputType | null
  }

  export type SurveyToUserAvgAggregateOutputType = {
    value: number | null
  }

  export type SurveyToUserSumAggregateOutputType = {
    value: number | null
  }

  export type SurveyToUserMinAggregateOutputType = {
    id: string | null
    value: number | null
    created_at: Date | null
    user_id: string | null
    survey_id: string | null
  }

  export type SurveyToUserMaxAggregateOutputType = {
    id: string | null
    value: number | null
    created_at: Date | null
    user_id: string | null
    survey_id: string | null
  }

  export type SurveyToUserCountAggregateOutputType = {
    id: number
    value: number
    created_at: number
    user_id: number
    survey_id: number
    _all: number
  }


  export type SurveyToUserAvgAggregateInputType = {
    value?: true
  }

  export type SurveyToUserSumAggregateInputType = {
    value?: true
  }

  export type SurveyToUserMinAggregateInputType = {
    id?: true
    value?: true
    created_at?: true
    user_id?: true
    survey_id?: true
  }

  export type SurveyToUserMaxAggregateInputType = {
    id?: true
    value?: true
    created_at?: true
    user_id?: true
    survey_id?: true
  }

  export type SurveyToUserCountAggregateInputType = {
    id?: true
    value?: true
    created_at?: true
    user_id?: true
    survey_id?: true
    _all?: true
  }

  export type SurveyToUserAggregateArgs = {
    /**
     * Filter which SurveyToUser to aggregate.
     * 
    **/
    where?: SurveyToUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyToUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyToUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SurveyToUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyToUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyToUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyToUsers
    **/
    _count?: true | SurveyToUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyToUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveyToUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyToUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyToUserMaxAggregateInputType
  }

  export type GetSurveyToUserAggregateType<T extends SurveyToUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyToUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyToUser[P]>
      : GetScalarType<T[P], AggregateSurveyToUser[P]>
  }




  export type SurveyToUserGroupByArgs = {
    where?: SurveyToUserWhereInput
    orderBy?: Enumerable<SurveyToUserOrderByWithAggregationInput>
    by: Array<SurveyToUserScalarFieldEnum>
    having?: SurveyToUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyToUserCountAggregateInputType | true
    _avg?: SurveyToUserAvgAggregateInputType
    _sum?: SurveyToUserSumAggregateInputType
    _min?: SurveyToUserMinAggregateInputType
    _max?: SurveyToUserMaxAggregateInputType
  }


  export type SurveyToUserGroupByOutputType = {
    id: string
    value: number | null
    created_at: Date
    user_id: string
    survey_id: string
    _count: SurveyToUserCountAggregateOutputType | null
    _avg: SurveyToUserAvgAggregateOutputType | null
    _sum: SurveyToUserSumAggregateOutputType | null
    _min: SurveyToUserMinAggregateOutputType | null
    _max: SurveyToUserMaxAggregateOutputType | null
  }

  type GetSurveyToUserGroupByPayload<T extends SurveyToUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SurveyToUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyToUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyToUserGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyToUserGroupByOutputType[P]>
        }
      >
    >


  export type SurveyToUserSelect = {
    id?: boolean
    value?: boolean
    created_at?: boolean
    User?: boolean | UserArgs
    user_id?: boolean
    Survey?: boolean | SurveyArgs
    survey_id?: boolean
  }

  export type SurveyToUserInclude = {
    User?: boolean | UserArgs
    Survey?: boolean | SurveyArgs
  }

  export type SurveyToUserGetPayload<
    S extends boolean | null | undefined | SurveyToUserArgs,
    U = keyof S
      > = S extends true
        ? SurveyToUser
    : S extends undefined
    ? never
    : S extends SurveyToUserArgs | SurveyToUserFindManyArgs
    ?'include' extends U
    ? SurveyToUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Survey' ? SurveyGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Survey' ? SurveyGetPayload<S['select'][P]> :  P extends keyof SurveyToUser ? SurveyToUser[P] : never
  } 
    : SurveyToUser
  : SurveyToUser


  type SurveyToUserCountArgs = Merge<
    Omit<SurveyToUserFindManyArgs, 'select' | 'include'> & {
      select?: SurveyToUserCountAggregateInputType | true
    }
  >

  export interface SurveyToUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SurveyToUser that matches the filter.
     * @param {SurveyToUserFindUniqueArgs} args - Arguments to find a SurveyToUser
     * @example
     * // Get one SurveyToUser
     * const surveyToUser = await prisma.surveyToUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurveyToUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SurveyToUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SurveyToUser'> extends True ? CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>> : CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser | null >, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T> | null >>

    /**
     * Find the first SurveyToUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyToUserFindFirstArgs} args - Arguments to find a SurveyToUser
     * @example
     * // Get one SurveyToUser
     * const surveyToUser = await prisma.surveyToUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurveyToUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SurveyToUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SurveyToUser'> extends True ? CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>> : CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser | null >, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T> | null >>

    /**
     * Find zero or more SurveyToUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyToUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyToUsers
     * const surveyToUsers = await prisma.surveyToUser.findMany()
     * 
     * // Get first 10 SurveyToUsers
     * const surveyToUsers = await prisma.surveyToUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyToUserWithIdOnly = await prisma.surveyToUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SurveyToUserFindManyArgs>(
      args?: SelectSubset<T, SurveyToUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SurveyToUser>>, PrismaPromise<Array<SurveyToUserGetPayload<T>>>>

    /**
     * Create a SurveyToUser.
     * @param {SurveyToUserCreateArgs} args - Arguments to create a SurveyToUser.
     * @example
     * // Create one SurveyToUser
     * const SurveyToUser = await prisma.surveyToUser.create({
     *   data: {
     *     // ... data to create a SurveyToUser
     *   }
     * })
     * 
    **/
    create<T extends SurveyToUserCreateArgs>(
      args: SelectSubset<T, SurveyToUserCreateArgs>
    ): CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>>

    /**
     * Delete a SurveyToUser.
     * @param {SurveyToUserDeleteArgs} args - Arguments to delete one SurveyToUser.
     * @example
     * // Delete one SurveyToUser
     * const SurveyToUser = await prisma.surveyToUser.delete({
     *   where: {
     *     // ... filter to delete one SurveyToUser
     *   }
     * })
     * 
    **/
    delete<T extends SurveyToUserDeleteArgs>(
      args: SelectSubset<T, SurveyToUserDeleteArgs>
    ): CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>>

    /**
     * Update one SurveyToUser.
     * @param {SurveyToUserUpdateArgs} args - Arguments to update one SurveyToUser.
     * @example
     * // Update one SurveyToUser
     * const surveyToUser = await prisma.surveyToUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurveyToUserUpdateArgs>(
      args: SelectSubset<T, SurveyToUserUpdateArgs>
    ): CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>>

    /**
     * Delete zero or more SurveyToUsers.
     * @param {SurveyToUserDeleteManyArgs} args - Arguments to filter SurveyToUsers to delete.
     * @example
     * // Delete a few SurveyToUsers
     * const { count } = await prisma.surveyToUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurveyToUserDeleteManyArgs>(
      args?: SelectSubset<T, SurveyToUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyToUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyToUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyToUsers
     * const surveyToUser = await prisma.surveyToUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurveyToUserUpdateManyArgs>(
      args: SelectSubset<T, SurveyToUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SurveyToUser.
     * @param {SurveyToUserUpsertArgs} args - Arguments to update or create a SurveyToUser.
     * @example
     * // Update or create a SurveyToUser
     * const surveyToUser = await prisma.surveyToUser.upsert({
     *   create: {
     *     // ... data to create a SurveyToUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyToUser we want to update
     *   }
     * })
    **/
    upsert<T extends SurveyToUserUpsertArgs>(
      args: SelectSubset<T, SurveyToUserUpsertArgs>
    ): CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>>

    /**
     * Find one SurveyToUser that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SurveyToUserFindUniqueOrThrowArgs} args - Arguments to find a SurveyToUser
     * @example
     * // Get one SurveyToUser
     * const surveyToUser = await prisma.surveyToUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurveyToUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SurveyToUserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>>

    /**
     * Find the first SurveyToUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyToUserFindFirstOrThrowArgs} args - Arguments to find a SurveyToUser
     * @example
     * // Get one SurveyToUser
     * const surveyToUser = await prisma.surveyToUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurveyToUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SurveyToUserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyToUserClient<SurveyToUser>, Prisma__SurveyToUserClient<SurveyToUserGetPayload<T>>>

    /**
     * Count the number of SurveyToUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyToUserCountArgs} args - Arguments to filter SurveyToUsers to count.
     * @example
     * // Count the number of SurveyToUsers
     * const count = await prisma.surveyToUser.count({
     *   where: {
     *     // ... the filter for the SurveyToUsers we want to count
     *   }
     * })
    **/
    count<T extends SurveyToUserCountArgs>(
      args?: Subset<T, SurveyToUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyToUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyToUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyToUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyToUserAggregateArgs>(args: Subset<T, SurveyToUserAggregateArgs>): PrismaPromise<GetSurveyToUserAggregateType<T>>

    /**
     * Group by SurveyToUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyToUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyToUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyToUserGroupByArgs['orderBy'] }
        : { orderBy?: SurveyToUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyToUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyToUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyToUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SurveyToUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Survey<T extends SurveyArgs = {}>(args?: Subset<T, SurveyArgs>): CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SurveyToUser base type for findUnique actions
   */
  export type SurveyToUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
    /**
     * Filter, which SurveyToUser to fetch.
     * 
    **/
    where: SurveyToUserWhereUniqueInput
  }

  /**
   * SurveyToUser: findUnique
   */
  export interface SurveyToUserFindUniqueArgs extends SurveyToUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SurveyToUser base type for findFirst actions
   */
  export type SurveyToUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
    /**
     * Filter, which SurveyToUser to fetch.
     * 
    **/
    where?: SurveyToUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyToUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyToUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyToUsers.
     * 
    **/
    cursor?: SurveyToUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyToUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyToUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyToUsers.
     * 
    **/
    distinct?: Enumerable<SurveyToUserScalarFieldEnum>
  }

  /**
   * SurveyToUser: findFirst
   */
  export interface SurveyToUserFindFirstArgs extends SurveyToUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SurveyToUser findMany
   */
  export type SurveyToUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
    /**
     * Filter, which SurveyToUsers to fetch.
     * 
    **/
    where?: SurveyToUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyToUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyToUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyToUsers.
     * 
    **/
    cursor?: SurveyToUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyToUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyToUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SurveyToUserScalarFieldEnum>
  }


  /**
   * SurveyToUser create
   */
  export type SurveyToUserCreateArgs = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
    /**
     * The data needed to create a SurveyToUser.
     * 
    **/
    data: XOR<SurveyToUserCreateInput, SurveyToUserUncheckedCreateInput>
  }


  /**
   * SurveyToUser update
   */
  export type SurveyToUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
    /**
     * The data needed to update a SurveyToUser.
     * 
    **/
    data: XOR<SurveyToUserUpdateInput, SurveyToUserUncheckedUpdateInput>
    /**
     * Choose, which SurveyToUser to update.
     * 
    **/
    where: SurveyToUserWhereUniqueInput
  }


  /**
   * SurveyToUser updateMany
   */
  export type SurveyToUserUpdateManyArgs = {
    /**
     * The data used to update SurveyToUsers.
     * 
    **/
    data: XOR<SurveyToUserUpdateManyMutationInput, SurveyToUserUncheckedUpdateManyInput>
    /**
     * Filter which SurveyToUsers to update
     * 
    **/
    where?: SurveyToUserWhereInput
  }


  /**
   * SurveyToUser upsert
   */
  export type SurveyToUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
    /**
     * The filter to search for the SurveyToUser to update in case it exists.
     * 
    **/
    where: SurveyToUserWhereUniqueInput
    /**
     * In case the SurveyToUser found by the `where` argument doesn't exist, create a new SurveyToUser with this data.
     * 
    **/
    create: XOR<SurveyToUserCreateInput, SurveyToUserUncheckedCreateInput>
    /**
     * In case the SurveyToUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SurveyToUserUpdateInput, SurveyToUserUncheckedUpdateInput>
  }


  /**
   * SurveyToUser delete
   */
  export type SurveyToUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
    /**
     * Filter which SurveyToUser to delete.
     * 
    **/
    where: SurveyToUserWhereUniqueInput
  }


  /**
   * SurveyToUser deleteMany
   */
  export type SurveyToUserDeleteManyArgs = {
    /**
     * Filter which SurveyToUsers to delete
     * 
    **/
    where?: SurveyToUserWhereInput
  }


  /**
   * SurveyToUser: findUniqueOrThrow
   */
  export type SurveyToUserFindUniqueOrThrowArgs = SurveyToUserFindUniqueArgsBase
      

  /**
   * SurveyToUser: findFirstOrThrow
   */
  export type SurveyToUserFindFirstOrThrowArgs = SurveyToUserFindFirstArgsBase
      

  /**
   * SurveyToUser without action
   */
  export type SurveyToUserArgs = {
    /**
     * Select specific fields to fetch from the SurveyToUser
     * 
    **/
    select?: SurveyToUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyToUserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SurveyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    created_at: 'created_at'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const SurveyToUserScalarFieldEnum: {
    id: 'id',
    value: 'value',
    created_at: 'created_at',
    user_id: 'user_id',
    survey_id: 'survey_id'
  };

  export type SurveyToUserScalarFieldEnum = (typeof SurveyToUserScalarFieldEnum)[keyof typeof SurveyToUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    surveys?: SurveyToUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    surveys?: SurveyToUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SurveyWhereInput = {
    AND?: Enumerable<SurveyWhereInput>
    OR?: Enumerable<SurveyWhereInput>
    NOT?: Enumerable<SurveyWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    users?: SurveyToUserListRelationFilter
  }

  export type SurveyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    users?: SurveyToUserOrderByRelationAggregateInput
  }

  export type SurveyWhereUniqueInput = {
    id?: string
  }

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SurveyScalarWhereWithAggregatesInput>
    OR?: Enumerable<SurveyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SurveyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SurveyToUserWhereInput = {
    AND?: Enumerable<SurveyToUserWhereInput>
    OR?: Enumerable<SurveyToUserWhereInput>
    NOT?: Enumerable<SurveyToUserWhereInput>
    id?: StringFilter | string
    value?: FloatNullableFilter | number | null
    created_at?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    user_id?: StringFilter | string
    Survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
    survey_id?: StringFilter | string
  }

  export type SurveyToUserOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
    user_id?: SortOrder
    Survey?: SurveyOrderByWithRelationInput
    survey_id?: SortOrder
  }

  export type SurveyToUserWhereUniqueInput = {
    id?: string
  }

  export type SurveyToUserOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    survey_id?: SortOrder
    _count?: SurveyToUserCountOrderByAggregateInput
    _avg?: SurveyToUserAvgOrderByAggregateInput
    _max?: SurveyToUserMaxOrderByAggregateInput
    _min?: SurveyToUserMinOrderByAggregateInput
    _sum?: SurveyToUserSumOrderByAggregateInput
  }

  export type SurveyToUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SurveyToUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<SurveyToUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SurveyToUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: FloatNullableWithAggregatesFilter | number | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    user_id?: StringWithAggregatesFilter | string
    survey_id?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    created_at?: Date | string
    surveys?: SurveyToUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    created_at?: Date | string
    surveys?: SurveyToUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveys?: SurveyToUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveys?: SurveyToUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyCreateInput = {
    id?: string
    title: string
    description: string
    created_at?: Date | string
    users?: SurveyToUserCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    created_at?: Date | string
    users?: SurveyToUserUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: SurveyToUserUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: SurveyToUserUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyToUserCreateInput = {
    id?: string
    value?: number | null
    created_at?: Date | string
    User: UserCreateNestedOneWithoutSurveysInput
    Survey: SurveyCreateNestedOneWithoutUsersInput
  }

  export type SurveyToUserUncheckedCreateInput = {
    id?: string
    value?: number | null
    created_at?: Date | string
    user_id: string
    survey_id: string
  }

  export type SurveyToUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutSurveysNestedInput
    Survey?: SurveyUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SurveyToUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    survey_id?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyToUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyToUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    survey_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SurveyToUserListRelationFilter = {
    every?: SurveyToUserWhereInput
    some?: SurveyToUserWhereInput
    none?: SurveyToUserWhereInput
  }

  export type SurveyToUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SurveyRelationFilter = {
    is?: SurveyWhereInput
    isNot?: SurveyWhereInput
  }

  export type SurveyToUserCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    survey_id?: SortOrder
  }

  export type SurveyToUserAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type SurveyToUserMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    survey_id?: SortOrder
  }

  export type SurveyToUserMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    survey_id?: SortOrder
  }

  export type SurveyToUserSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type SurveyToUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutUserInput>, Enumerable<SurveyToUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
  }

  export type SurveyToUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutUserInput>, Enumerable<SurveyToUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SurveyToUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutUserInput>, Enumerable<SurveyToUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SurveyToUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<SurveyToUserWhereUniqueInput>
    disconnect?: Enumerable<SurveyToUserWhereUniqueInput>
    delete?: Enumerable<SurveyToUserWhereUniqueInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
    update?: Enumerable<SurveyToUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SurveyToUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SurveyToUserScalarWhereInput>
  }

  export type SurveyToUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutUserInput>, Enumerable<SurveyToUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SurveyToUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<SurveyToUserWhereUniqueInput>
    disconnect?: Enumerable<SurveyToUserWhereUniqueInput>
    delete?: Enumerable<SurveyToUserWhereUniqueInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
    update?: Enumerable<SurveyToUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SurveyToUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SurveyToUserScalarWhereInput>
  }

  export type SurveyToUserCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutSurveyInput>, Enumerable<SurveyToUserUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutSurveyInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
  }

  export type SurveyToUserUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutSurveyInput>, Enumerable<SurveyToUserUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutSurveyInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
  }

  export type SurveyToUserUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutSurveyInput>, Enumerable<SurveyToUserUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<SurveyToUserUpsertWithWhereUniqueWithoutSurveyInput>
    set?: Enumerable<SurveyToUserWhereUniqueInput>
    disconnect?: Enumerable<SurveyToUserWhereUniqueInput>
    delete?: Enumerable<SurveyToUserWhereUniqueInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
    update?: Enumerable<SurveyToUserUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<SurveyToUserUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<SurveyToUserScalarWhereInput>
  }

  export type SurveyToUserUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<SurveyToUserCreateWithoutSurveyInput>, Enumerable<SurveyToUserUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyToUserCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<SurveyToUserUpsertWithWhereUniqueWithoutSurveyInput>
    set?: Enumerable<SurveyToUserWhereUniqueInput>
    disconnect?: Enumerable<SurveyToUserWhereUniqueInput>
    delete?: Enumerable<SurveyToUserWhereUniqueInput>
    connect?: Enumerable<SurveyToUserWhereUniqueInput>
    update?: Enumerable<SurveyToUserUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<SurveyToUserUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<SurveyToUserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSurveysInput = {
    create?: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveysInput
    connect?: UserWhereUniqueInput
  }

  export type SurveyCreateNestedOneWithoutUsersInput = {
    create?: XOR<SurveyCreateWithoutUsersInput, SurveyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutUsersInput
    connect?: SurveyWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSurveysNestedInput = {
    create?: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveysInput
    upsert?: UserUpsertWithoutSurveysInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSurveysInput, UserUncheckedUpdateWithoutSurveysInput>
  }

  export type SurveyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SurveyCreateWithoutUsersInput, SurveyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutUsersInput
    upsert?: SurveyUpsertWithoutUsersInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<SurveyUpdateWithoutUsersInput, SurveyUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type SurveyToUserCreateWithoutUserInput = {
    id?: string
    value?: number | null
    created_at?: Date | string
    Survey: SurveyCreateNestedOneWithoutUsersInput
  }

  export type SurveyToUserUncheckedCreateWithoutUserInput = {
    id?: string
    value?: number | null
    created_at?: Date | string
    survey_id: string
  }

  export type SurveyToUserCreateOrConnectWithoutUserInput = {
    where: SurveyToUserWhereUniqueInput
    create: XOR<SurveyToUserCreateWithoutUserInput, SurveyToUserUncheckedCreateWithoutUserInput>
  }

  export type SurveyToUserUpsertWithWhereUniqueWithoutUserInput = {
    where: SurveyToUserWhereUniqueInput
    update: XOR<SurveyToUserUpdateWithoutUserInput, SurveyToUserUncheckedUpdateWithoutUserInput>
    create: XOR<SurveyToUserCreateWithoutUserInput, SurveyToUserUncheckedCreateWithoutUserInput>
  }

  export type SurveyToUserUpdateWithWhereUniqueWithoutUserInput = {
    where: SurveyToUserWhereUniqueInput
    data: XOR<SurveyToUserUpdateWithoutUserInput, SurveyToUserUncheckedUpdateWithoutUserInput>
  }

  export type SurveyToUserUpdateManyWithWhereWithoutUserInput = {
    where: SurveyToUserScalarWhereInput
    data: XOR<SurveyToUserUpdateManyMutationInput, SurveyToUserUncheckedUpdateManyWithoutSurveysInput>
  }

  export type SurveyToUserScalarWhereInput = {
    AND?: Enumerable<SurveyToUserScalarWhereInput>
    OR?: Enumerable<SurveyToUserScalarWhereInput>
    NOT?: Enumerable<SurveyToUserScalarWhereInput>
    id?: StringFilter | string
    value?: FloatNullableFilter | number | null
    created_at?: DateTimeFilter | Date | string
    user_id?: StringFilter | string
    survey_id?: StringFilter | string
  }

  export type SurveyToUserCreateWithoutSurveyInput = {
    id?: string
    value?: number | null
    created_at?: Date | string
    User: UserCreateNestedOneWithoutSurveysInput
  }

  export type SurveyToUserUncheckedCreateWithoutSurveyInput = {
    id?: string
    value?: number | null
    created_at?: Date | string
    user_id: string
  }

  export type SurveyToUserCreateOrConnectWithoutSurveyInput = {
    where: SurveyToUserWhereUniqueInput
    create: XOR<SurveyToUserCreateWithoutSurveyInput, SurveyToUserUncheckedCreateWithoutSurveyInput>
  }

  export type SurveyToUserUpsertWithWhereUniqueWithoutSurveyInput = {
    where: SurveyToUserWhereUniqueInput
    update: XOR<SurveyToUserUpdateWithoutSurveyInput, SurveyToUserUncheckedUpdateWithoutSurveyInput>
    create: XOR<SurveyToUserCreateWithoutSurveyInput, SurveyToUserUncheckedCreateWithoutSurveyInput>
  }

  export type SurveyToUserUpdateWithWhereUniqueWithoutSurveyInput = {
    where: SurveyToUserWhereUniqueInput
    data: XOR<SurveyToUserUpdateWithoutSurveyInput, SurveyToUserUncheckedUpdateWithoutSurveyInput>
  }

  export type SurveyToUserUpdateManyWithWhereWithoutSurveyInput = {
    where: SurveyToUserScalarWhereInput
    data: XOR<SurveyToUserUpdateManyMutationInput, SurveyToUserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserCreateWithoutSurveysInput = {
    id?: string
    name: string
    email: string
    created_at?: Date | string
  }

  export type UserUncheckedCreateWithoutSurveysInput = {
    id?: string
    name: string
    email: string
    created_at?: Date | string
  }

  export type UserCreateOrConnectWithoutSurveysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
  }

  export type SurveyCreateWithoutUsersInput = {
    id?: string
    title: string
    description: string
    created_at?: Date | string
  }

  export type SurveyUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    description: string
    created_at?: Date | string
  }

  export type SurveyCreateOrConnectWithoutUsersInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutUsersInput, SurveyUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSurveysInput = {
    update: XOR<UserUpdateWithoutSurveysInput, UserUncheckedUpdateWithoutSurveysInput>
    create: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
  }

  export type UserUpdateWithoutSurveysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSurveysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUpsertWithoutUsersInput = {
    update: XOR<SurveyUpdateWithoutUsersInput, SurveyUncheckedUpdateWithoutUsersInput>
    create: XOR<SurveyCreateWithoutUsersInput, SurveyUncheckedCreateWithoutUsersInput>
  }

  export type SurveyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyToUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Survey?: SurveyUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SurveyToUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    survey_id?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyToUserUncheckedUpdateManyWithoutSurveysInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    survey_id?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyToUserUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutSurveysNestedInput
  }

  export type SurveyToUserUncheckedUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyToUserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}