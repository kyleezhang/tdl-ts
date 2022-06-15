import { String, Union } from 'ts-toolbelt'

const query = '/home?a=wonderful&b=wow'
type Query = typeof query
type QueryPart = String.Split<Query, '?'>[1]
type QueryElements = String.Split<QueryPart, '&'>

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [K in String.Split<QueryElement, '='>[0]]: String.Split<QueryElement, '='>[1]
    }
}[QueryElements[number]]

const obj: Union.Merge<QueryParams> = {
    a: 'wonderful',
    b: 'wow'
}
