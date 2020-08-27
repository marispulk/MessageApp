// Import ChatMessage data model
import { ChatMessage } from './chatmessage';

// Create fake array for mock messages called CHATMESSAGES, use ChatMessage data model array
export const CHATMESSAGES: ChatMessage[] = [
    {id: 1, username: 'Admin', content: 'Message 1', date: '25.08.2020 12:20:00'},
    {id: 2, username: 'Admin', content: 'Message 2', date: '25.08.2020 12:21:00'},
    {id: 3, username: 'Guest', content: 'Message 3', date: '25.08.2020 12:22:00'},
    {id: 4, username: 'Admin', content: 'Message 4', date: '25.08.2020 12:23:00'},
    {id: 5, username: 'Guest', content: 'Message 5', date: '25.08.2020 12:24:00'},
    {id: 6, username: 'Admin', content: 'Message 6', date: '25.08.2020 12:25:00'}
]