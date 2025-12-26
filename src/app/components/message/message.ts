import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {
  conversations = [
    {
      id: 1,
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Thanks for the project details. I can start next week.',
      time: '2 min ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The wireframes look great! When can we discuss the backend?',
      time: '1 hour ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'I have experience with similar projects. Let me know if you need a quote.',
      time: '3 hours ago',
      unread: 1,
      online: true
    }
  ];

  selectedConversation = this.conversations[0];

  messages = [
    {
      id: 1,
      senderId: 2,
      text: 'Hi! I saw your project posting for the e-commerce platform. I have 5+ years of experience with React and Node.js.',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      senderId: 1,
      text: 'Great! Can you share some examples of your previous work?',
      time: '10:35 AM',
      isOwn: true
    },
    {
      id: 3,
      senderId: 2,
      text: 'Sure! Here are a few projects I\'ve completed recently. I can have the initial setup ready within a week.',
      time: '10:40 AM',
      isOwn: false
    },
    {
      id: 4,
      senderId: 1,
      text: 'Thanks for the project details. I can start next week.',
      time: '2 min ago',
      isOwn: true
    }
  ];

  showChat = false;

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
    this.showChat = true;
  }

  goBackToList() {
    this.showChat = false;
  }
}
