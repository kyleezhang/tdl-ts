type Entity = { type: 'user' } | { type: 'post' } | { type: 'commoent' }

type Key = Entity['type']

export type EntityWithId = {
    [V in Entity['type']]: {
        type: V,
    } & Record<`${V}Id`, string>
}[Entity['type']]

const testdemo: EntityWithId = {
    type: 'post',
    postId: '12'
}