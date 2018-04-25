
/**
 * An abstraction of the low-level Firebase API.
 *
 * Allows us to use either firebase-admin (in Node environments) or
 * firebase (in web environments).
 */
export interface FirebaseApi {
  ref(path?: string): Reference;
}

export interface DataSnapshot {
  val: any;
}

export interface ThenableReference extends Reference, Promise<any> {}

export interface Reference {
  key: string | null;

  update(updates: { [path: string]: any }): void;

  push(value?: any, onComplete?: (a: Error|null) => any): ThenableReference;

  off(): void;

  on(
    eventType: string,
    callback: (a: DataSnapshot | null, b?: string) => any,
    cancelCallbackOrContext?: Object | null,
    context?: Object | null,
  ): void;

  once(
    eventType: string,
    successCallback?: (a: DataSnapshot, b?: string) => any,
    failureCallbackOrContext?: Object | null,
    context?: Object | null,
  ): Promise<any>;
}
