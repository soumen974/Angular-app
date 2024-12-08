import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent {
  pricingPlans = [
    {
      name: 'Starter',
      price: 9.99,
      features: [
        'Up to 2 users',
        'Basic features',
        'Limited support',
        '100 GB storage'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: 24.99,
      features: [
        'Up to 5 users',
        'Advanced features',
        'Priority support',
        '500 GB storage',
        'Collaboration tools'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 49.99,
      features: [
        'Unlimited users',
        'Full feature set',
        '24/7 dedicated support',
        '1 TB storage',
        'Custom integrations',
        'Advanced security'
      ],
      recommended: false
    }
  ];

  featureHighlights = [
    {
      icon: 'rocket',
      title: 'Rapid Deployment',
      description: 'Get started in minutes with our easy setup process.'
    },
    {
      icon: 'shield',
      title: 'Top Security',
      description: 'Enterprise-grade security to protect your data.'
    },
    {
      icon: 'sync',
      title: 'Seamless Updates',
      description: 'Continuous improvements without disrupting your workflow.'
    }
  ];

  scrollToPlans() {
    document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' });
  }
}